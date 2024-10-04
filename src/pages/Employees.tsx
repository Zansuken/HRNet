import { FC, useEffect } from "react";
import Header from "../components/Header";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { appSelectors } from "../redux/app/appSelectors";
import getEmployees from "../redux/app/getEmployees";
import { Employee } from "../types/employee";
import { Table, TableRowType } from "doom-ui";

const Employees: FC = () => {
  const isFetchingEmployees = useAppSelector(appSelectors.selectLoading);
  const employees = useAppSelector(appSelectors.selectEmployees);

  const dispatch = useAppDispatch();

  const columns = [
    { label: "First Name", key: "firstName" },
    { label: "Last Name", key: "lastName" },
    { label: "Date of Birth", key: "dob" },
    { label: "Start Date", key: "startDate" },
    { label: "Street", key: "street" },
    { label: "City", key: "city" },
    { label: "State", key: "state" },
    { label: "Zip Code", key: "zipCode" },
    { label: "Department", key: "department" },
  ];

  const formatData = (key: keyof Employee, data: string) => {
    if (key === "dob" || key === "startDate") {
      return new Date(data).toLocaleDateString();
    }

    return data || "-";
  };

  const formattedEmployees = employees.map((employee) => {
    const newEmployee: TableRowType = {};
    for (const key in employee) {
      const currentKey = key as keyof Employee;

      newEmployee[currentKey] = {
        value: formatData(
          currentKey,
          employee[currentKey as keyof Employee] ?? ""
        ),
        hide: currentKey === "id",
      };
    }

    return newEmployee;
  });

  const rows = formattedEmployees.map((employee) => employee);

  useEffect(() => {
    dispatch(getEmployees());
  }, [dispatch]);

  return (
    <>
      <Header />
      <main className="container flex flex-col mx-auto my-8 h-[calc(100vh-92px)]">
        <Table
          columns={columns}
          rows={rows}
          enablePagination
          enableSearch
          isLoading={isFetchingEmployees}
          title="Current Employees"
        />
      </main>
    </>
  );
};

export default Employees;
