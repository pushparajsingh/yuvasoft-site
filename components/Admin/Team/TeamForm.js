import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { Form, Container, Row, Col } from "react-bootstrap";
import { FaUsers } from "react-icons/fa";
import FormInput from "../../FormElements/FormInput";
import { useRouter } from "next/router";
import { emailPattern } from "../../../constants";
import ActionFooter from "../Utility/ActionFooter";
//import Select from "react-select";
import { useNotification } from "../../../contexts/NotificationContext";
import DeleteConfirmationModal from "../Utility/DeleteConfirmationModal";
import { FullPageLoading } from "../../Loading/Loading";
import FormSelect from "../../FormElements/FormSelect";
import {categoriesList} from "../../../redux/Categories/categories.action"
import {
  teamDetails,
  teamCreate,
  teamUpdate,
  teamDelete,
  teamReset,
} from "../../../redux/Team/Team.action";
import { useSelector, useDispatch } from "react-redux";
import { designationCreate } from "../../../redux/Designations/Designations.action";

const TeamForm = () => {
  const params = useRouter();
  const { id } = params.query;
  const dispatch = useDispatch();

  const [openModal, setOpenModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const { Toast } = useNotification();
  

  const {
    control,
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {
    create,
    update,
    deleteTeam,
    details,
    detailsLoading,
    deleteLoading,
    loading,
    allState,
  } = useSelector((state) => ({
    allState: state,
    create: state?.team?.create,
    update: state?.team?.update,
    details: state?.team?.details,
    deleteTeam: state?.team?.delete,
    detailsLoading: state?.team?.detailsLoading,
    loading: state?.team?.createLoading || state?.team?.updateLoading,
    deleteLoading: state?.team?.deleteLoading,
  }));
const {list}=useSelector((state)=>({
  list: state?.categories?.list,
}))
console.log("list",list)
  console.log(444, loading);

  useEffect(() => {
    if (id) dispatch(teamDetails(id));
  }, []);

  useEffect(() => {
    if (details) {
      setValue("first_name", details?.first_name);
      setValue("last_name", details?.last_name);
      setValue("email", details?.email);
      setValue("contact", details?.contact);
      setValue("id", details?.id);
      dispatch(teamReset());
    }

    if (deleteTeam || create) {
      let message = "Team Added successfully.";
      if (deleteTeam) message = "Team deleted successfully.";
      Toast.success(message);
      setOpenModal(false);
      dispatch(teamReset());
      params.push("/admin/team");
    }

    if (update) {
      Toast.success("Team updated successfully.");
      dispatch(teamReset());
      params.push("/admin/team");
    }
  }, [create, update, details, deleteTeam]);

  // if (detailsLoading) return <FullPageLoading />;

  const onSubmit = (data) => {
    if (id) {
      dispatch(teamUpdate(data));
    } else {
      dispatch(teamCreate(data));
    }
  };
 

  useEffect(() => {
    if (id) setIsEdit(true);
  }, [id]);

  const handleDelete = () => {
    dispatch(teamDelete(id));
  };
  useEffect(()=>{
   dispatch(categoriesList());
  },[])

  return (
    <Container fluid>
      <Row className="mb-4">
        <Col md={12}>
          <div className="list-header">
            <FaUsers />
            <div className="content">
              <h2>{id ? "Update" : "Create"} Team</h2>
              <p>Manage your team</p>
            </div>
          </div>
        </Col>
      </Row>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {id && (
          <FormInput
            name="id"
            type="hidden"
            {...register("id")}
            errors={errors}
            disabled={isEdit}
          />
        )}
        <Row>
          <Col md={6}>
            <FormInput
              label="First Name"
              name="first_name"
              placeholder="Type here"
              {...register("first_name", {
                required: true,
              })}
              errors={errors}
              disabled={isEdit}
            />
          </Col>
          <Col md={6}>
            <FormInput
              label="Last Name"
              name="last_name"
              placeholder="Type here"
              {...register("last_name", {
                required: true,
              })}
              errors={errors}
              disabled={isEdit}
            />
          </Col>
          <Col md={6}>
            <FormInput
              label="Email"
              name="email"
              placeholder="me@gmail.com"
              {...register("email", {
                required: true,
                pattern: {
                  value: emailPattern,
                  message: "Email should be in valid format.",
                },
              })}
              errors={errors}
              disabled={isEdit}
            />
          </Col>
          <Col md={6}>
            <FormInput
              label="contact"
              name="contact"
              type="number"
              placeholder="Type here"
              {...register("contact", {
                required: true,
              })}
              errors={errors}
              disabled={isEdit}
            />
          </Col>
          <Col md={6}>
        {/* * {console.log(1111, errors)} */}
        <FormInput
              label="description"
              name="description"
              type="text"
              placeholder="Type here"
              {...register("description", {
                required: true,
              })}
              errors={errors}
              disabled={isEdit}
            />

        </Col>
        <Col md={6}>
        <FormInput
              label="image"
              name="image"
              type="text"
              placeholder="Type here"
              // {...register("image", {
              //   required: true,
              // })}
              errors={errors}
              disabled={isEdit}
            />

        </Col>
        </Row>
        <FormSelect
          name="designation_id"
          label="designation_id"
          aria-label="Select one"
          errors={errors}
          disabled={isEdit}
           {...register("designation_id", {
          //   // required: true,
           })}
          options={[
            { text: "select one", value: "" },
            { text: "React-dev", value: "React-dev" },
          ]}
        
        />
       
        {/* <select>
         {
            list?.data?.map((x,y) => 
              <option key={y}>{x.name}</option> )
          }
          </select> */}
    
        <ActionFooter
          isEdit={isEdit}
          loading={loading}
          setIsEdit={setIsEdit}
          setOpenModal={setOpenModal}
        />
        <DeleteConfirmationModal
          openModal={openModal}
          setOpenModal={setOpenModal}
          handleDelete={handleDelete}
          deleteLoading={deleteLoading}
        />
      </Form>
    </Container>
  );
};
export default TeamForm;
