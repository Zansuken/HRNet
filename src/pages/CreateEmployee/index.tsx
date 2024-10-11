import { FC, useState } from "react";
import { RegisterOptions, useForm, UseFormRegister } from "react-hook-form";
import classNames from "classnames";
import Header from "../../components/Header";
import ConfirmationDialog from "./ConfirmationDialog";
import { FormProps } from "./types";
import { useAppDispatch } from "../../redux/hooks";
import { addEmployee } from "../../redux/app/appSlice";
import { useNavigate } from "react-router-dom";
import { Button, Input, Select, DatePicker } from "doom-ui";
import { departmentsOptions, statesOptions } from "./constants";
import { IS_DEV } from "../../constants";

const registerExt = (
  register: UseFormRegister<any>,
  fieldName: string,
  options: RegisterOptions
) => ({ ...register(fieldName, options), required: !!options.required });

const getRequiredMessage = () => "required";
const getMaxLengthMessage = (maxLength: number) =>
  `maximum ${maxLength} characters`;
const getZipCodePatternMessage = () => "should be 5 digits";

const CreateEmployee: FC = () => {
  const [isConfirmationDialogOpen, setIsConfirmationDialogOpen] =
    useState(false);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit, formState, setValue } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      dob: "",
      startDate: "",
      street: "",
      city: "",
      state: "",
      zipCode: "",
      department: "",
    },
    mode: "onBlur",
  });

  const handleOnSubmit = (data: FormProps) => {
    setIsConfirmationDialogOpen(true);
    dispatch(addEmployee(data));
  };

  const onConfirmationDialogClose = () => {
    setIsConfirmationDialogOpen(false);
    navigate("/employees");
  };

  const fillMockedData = () => {
    setValue("firstName", "John");
    setValue("lastName", "Doe");
    setValue("dob", "1985-07-15");
    setValue("startDate", "2020-05-01");
    setValue("street", "123 Main St");
    setValue("city", "Anytown");
    setValue("state", "alabama");
    setValue("zipCode", "12345");
    setValue("department", "sales");
  };

  const isSubmitDisabled = Object.keys(formState.errors).length > 0;
  const fieldSetHasError = Boolean(
    formState.errors["street"] ||
      formState.errors["city"] ||
      formState.errors["state"] ||
      formState.errors["zipCode"]
  );

  const registerFirstName = registerExt(register, "firstName", {
    required: { value: true, message: getRequiredMessage() },
    maxLength: {
      value: 20,
      message: getMaxLengthMessage(20),
    },
  });

  const registerLastName = registerExt(register, "lastName", {
    required: { value: true, message: getRequiredMessage() },
    maxLength: {
      value: 20,
      message: getMaxLengthMessage(20),
    },
  });

  const registerDob = registerExt(register, "dob", {
    required: { value: true, message: getRequiredMessage() },
  });

  const registerStartDate = registerExt(register, "startDate", {
    required: { value: true, message: getRequiredMessage() },
  });

  const registerStreet = registerExt(register, "street", {
    required: { value: true, message: getRequiredMessage() },
    maxLength: {
      value: 50,
      message: getMaxLengthMessage(50),
    },
  });

  const registerCity = registerExt(register, "city", {
    required: { value: true, message: getRequiredMessage() },
    maxLength: {
      value: 50,
      message: getMaxLengthMessage(50),
    },
  });

  const registerState = registerExt(register, "state", {
    required: { value: true, message: getRequiredMessage() },
  });

  const registerZipCode = registerExt(register, "zipCode", {
    required: { value: true, message: getRequiredMessage() },
    pattern: {
      value: /^[0-9]{5}$/,
      message: getZipCodePatternMessage(),
    },
  });

  const registerDepartment = registerExt(register, "department", {
    required: { value: true, message: getRequiredMessage() },
  });

  return (
    <>
      <Header />
      <main className="flex flex-col items-center w-full max-w-md px-4 pt-6 space-y-6 h-full">
        <h2 className="text-2xl font-semibold">Create Employee</h2>
        {IS_DEV && (
          <div className="absolute top-2 right-8">
            <Button onClick={fillMockedData} type="button">
              Fill Mocked Data
            </Button>
          </div>
        )}
        <form
          className="w-full flex flex-col gap-4 !mt-4"
          onSubmit={handleSubmit(handleOnSubmit)}
        >
          <Input
            id="first-name"
            label="First Name"
            type="text"
            inputProps={registerFirstName}
            error={formState.errors["firstName"]?.message}
          />
          <Input
            id="last-name"
            label="Last Name"
            type="text"
            inputProps={registerLastName}
            error={formState.errors["lastName"]?.message}
          />
          <DatePicker
            id="dob"
            label="Date of Birth"
            inputProps={registerDob}
            error={formState.errors["dob"]?.message}
          />
          <DatePicker
            id="start-date"
            label="Start Date"
            inputProps={registerStartDate}
            error={formState.errors["startDate"]?.message}
          />
          <fieldset
            className={classNames("p-4 border rounded-md flex flex-col gap-2", {
              "border-red-500": fieldSetHasError,
            })}
          >
            <legend
              className={classNames("px-2 text-sm font-medium", {
                "text-red-500": fieldSetHasError,
              })}
            >
              Address
            </legend>
            <Input
              id="street"
              label="Street"
              type="text"
              inputProps={registerStreet}
              error={formState.errors["street"]?.message}
            />
            <Input
              id="city"
              label="City"
              type="text"
              inputProps={registerCity}
              error={formState.errors["city"]?.message}
            />
            <Select
              id="state"
              label="State"
              options={statesOptions}
              inputProps={registerState}
              error={formState.errors["state"]?.message}
              emptyOption="Select a state"
            />
            <Input
              id="zip-code"
              label="Zip Code"
              type="text"
              inputProps={registerZipCode}
              error={formState.errors["zipCode"]?.message}
            />
          </fieldset>
          <Select
            id="department"
            label="Department"
            options={departmentsOptions}
            inputProps={registerDepartment}
            error={formState.errors["department"]?.message}
            emptyOption="Select a department"
          />
          <Button
            type="submit"
            buttonProps={{
              disabled: isSubmitDisabled,
            }}
          >
            Save
          </Button>
        </form>
      </main>
      <ConfirmationDialog
        onClose={onConfirmationDialogClose}
        open={isConfirmationDialogOpen}
      />
    </>
  );
};

export default CreateEmployee;
