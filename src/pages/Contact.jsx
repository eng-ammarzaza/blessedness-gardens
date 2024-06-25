import { useEffect } from "react";
import { useForm } from "react-hook-form";
import MiniColumn from "../ui/MiniColumn";
import Form from "../ui/Form";
import FormRow from "../ui/FormRow";
import Input from "../ui/input";
import styled from "styled-components";
import { SiMinutemailer } from "react-icons/si";
import SectionImageHeader from "../ui/SectionImageHeader";

const Button = styled.button`
  font-family: "Quicksand", sans-serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-size: 2rem;
  border: solid 1px;
  border-radius: 50px;
  padding: 1.5rem 4.5rem;
  color: white;
  background: var(--color-brand-700);
  margin-top: 2rem;
  &:hover {
    background: #37652d;
    letter-spacing: 4px;
    transition: letter-spacing 0.6s ease;
  }
`;
function Contact() {
  useEffect(() => {
    document.title = "Blessedness Gardes: Contact Us";
    return function () {
      document.title = "Blessedness Gardes";
    };
  }, []);
  const { register, handleSubmit, formState, reset } = useForm();
  function onSubmit(data) {
    console.log(data);
    reset();
  }
  function onError() {}
  const { errors } = formState;

  return (
    <>
      <SectionImageHeader title={"Contact us"} image={"/bavariacast.jpg"} />
      <MiniColumn style={{ margin: "8rem 4rem 4rem" }}>
        <Form onSubmit={handleSubmit(onSubmit, onError)}>
          <FormRow label={"Full Name:"} error={errors?.fullName?.message}>
            <Input
              kind={"contact"}
              style={{ width: "50rem" }}
              type="text"
              id="name"
              placeholder="Enter your Name Please..."
              {...register("fullName", {
                required: "Full Name is required",
              })}
            />
          </FormRow>

          <FormRow label={"E-mail Address:"} error={errors?.email?.message}>
            <Input
              kind={"contact"}
              style={{ width: "50rem" }}
              type="text"
              placeholder="Enter your E-mail Address Please..."
              id="email"
              {...register("email", {
                required: "E-mail is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Please Enter A Valid Email!",
                },
              })}
            />
          </FormRow>

          <FormRow
            label={"Kindly send your notes >"}
            error={errors?.message?.message}
          >
            <Input
              kind={"contact"}
              style={{ width: "50rem", height: "10rem" }}
              type="text"
              id="message"
              placeholder="Write here your message please...."
              {...register("message", {
                required: "Empty message box",
              })}
            />
          </FormRow>
          <Button>
            <span>
              Send <SiMinutemailer />
            </span>
          </Button>
        </Form>
      </MiniColumn>
    </>
  );
}

export default Contact;
