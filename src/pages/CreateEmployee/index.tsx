import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import classNames from "classnames";
import Header from "../../components/Header";
import ConfirmationDialog from "./ConfirmationDialog";
import { FormProps } from "./types";
import { useAppDispatch } from "../../redux/hooks";
import { addEmployee } from "../../redux/app/appSlice";
import { useNavigate } from "react-router-dom";
import { Button, Input, Select, DatePicker } from "doom-ui";

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

  return (
    <>
      <Header />
      <main className="flex flex-col items-center w-full max-w-md px-4 pt-6 space-y-6 h-full">
        <h2 className="text-2xl font-semibold">Create Employee</h2>
        <div className="absolute top-2 right-8">
          <Button onClick={fillMockedData} type="button">
            Fill Mocked Data
          </Button>
        </div>
        <form
          className="w-full flex flex-col gap-4 !mt-4"
          onSubmit={handleSubmit(handleOnSubmit)}
        >
          <Input
            id="first-name"
            label="First Name"
            type="text"
            inputProps={{
              ...register("firstName", {
                required: { value: true, message: "First Name is required" },
                maxLength: {
                  value: 20,
                  message: "First Name should not exceed 20 characters",
                },
              }),
            }}
            error={formState.errors["firstName"]?.message}
          />
          <Input
            id="last-name"
            label="Last Name"
            type="text"
            inputProps={{
              ...register("lastName", {
                required: { value: true, message: "Last Name is required" },
                maxLength: {
                  value: 20,
                  message: "Last Name should not exceed 20 characters",
                },
              }),
            }}
            error={formState.errors["lastName"]?.message}
          />
          <DatePicker
            id="dob"
            label="Date of Birth"
            inputProps={{
              ...register("dob", {
                required: { value: true, message: "Date of Birth is required" },
              }),
            }}
            error={formState.errors["dob"]?.message}
          />
          <DatePicker
            id="start-date"
            label="Start Date"
            inputProps={{
              ...register("startDate", {
                required: { value: true, message: "Start Date is required" },
              }),
            }}
            error={formState.errors["startDate"]?.message}
          />
          <fieldset
            className={classNames("p-4 border rounded-md flex flex-col gap-2", {
              "border-red-500": Boolean(
                formState.errors["street"] ||
                  formState.errors["city"] ||
                  formState.errors["state"] ||
                  formState.errors["zipCode"]
              ),
            })}
          >
            <legend
              className={classNames("px-2 text-sm font-medium", {
                "text-red-500": Boolean(
                  formState.errors["street"] ||
                    formState.errors["city"] ||
                    formState.errors["state"] ||
                    formState.errors["zipCode"]
                ),
              })}
            >
              Address
            </legend>
            <Input
              id="street"
              label="Street"
              type="text"
              inputProps={{
                ...register("street", {
                  required: { value: true, message: "Street is required" },
                  maxLength: {
                    value: 50,
                    message: "Street should not exceed 50 characters",
                  },
                }),
              }}
              error={formState.errors["street"]?.message}
            />
            <Input
              id="city"
              label="City"
              type="text"
              inputProps={{
                ...register("city", {
                  required: { value: true, message: "City is required" },
                  maxLength: {
                    value: 50,
                    message: "City should not exceed 24 characters",
                  },
                }),
              }}
              error={formState.errors["city"]?.message}
            />
            <Select
              id="state"
              label="State"
              options={[
                { value: "alabama", label: "Alabama" },
                { value: "alaska", label: "Alaska" },
                { value: "arizona", label: "Arizona" },
                { value: "arkansas", label: "Arkansas" },
                { value: "california", label: "California" },
                { value: "colorado", label: "Colorado" },
                { value: "connecticut", label: "Connecticut" },
                { value: "delaware", label: "Delaware" },
                { value: "florida", label: "Florida" },
                { value: "georgia", label: "Georgia" },
                { value: "hawaii", label: "Hawaii" },
                { value: "idaho", label: "Idaho" },
                { value: "illinois", label: "Illinois" },
                { value: "indiana", label: "Indiana" },
                { value: "iowa", label: "Iowa" },
                { value: "kansas", label: "Kansas" },
                { value: "kentucky", label: "Kentucky" },
                { value: "louisiana", label: "Louisiana" },
                { value: "maine", label: "Maine" },
                { value: "maryland", label: "Maryland" },
                { value: "massachusetts", label: "Massachusetts" },
                { value: "michigan", label: "Michigan" },
                { value: "minnesota", label: "Minnesota" },
                { value: "mississippi", label: "Mississippi" },
                { value: "missouri", label: "Missouri" },
                { value: "montana", label: "Montana" },
                { value: "nebraska", label: "Nebraska" },
                { value: "nevada", label: "Nevada" },
                { value: "new-hampshire", label: "New Hampshire" },
                { value: "new-jersey", label: "New Jersey" },
                { value: "new-mexico", label: "New Mexico" },
                { value: "new-york", label: "New York" },
                { value: "north-carolina", label: "North Carolina" },
                { value: "north-dakota", label: "North Dakota" },
              ]}
              inputProps={{
                ...register("state", {
                  required: { value: true, message: "State is required" },
                }),
              }}
              error={formState.errors["state"]?.message}
              emptyOption="Select a state"
            />
            <Input
              id="zip-code"
              label="Zip Code"
              type="text"
              inputProps={{
                ...register("zipCode", {
                  required: { value: true, message: "Zip Code is required" },
                  pattern: {
                    value: /^[0-9]{5}$/,
                    message: "Zip Code should be 5 digits",
                  },
                }),
              }}
              error={formState.errors["zipCode"]?.message}
            />
          </fieldset>
          <Select
            id="department"
            label="Department"
            options={[
              { value: "sales", label: "Sales" },
              { value: "marketing", label: "Marketing" },
              { value: "engineering", label: "Engineering" },
              { value: "hr", label: "HR" },
              { value: "finance", label: "Finance" },
            ]}
            inputProps={{
              ...register("department", {
                required: { value: true, message: "Department is required" },
              }),
            }}
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
