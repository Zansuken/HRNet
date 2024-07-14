import { FC, useState } from "react";
import Select from "../components/ui/Select";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import Header from "../components/Header";

const Employees: FC = () => {
  const [search, setSearch] = useState("");
  const [showEntries, setShowEntries] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [employees, setEmployees] = useState([
    {
      firstName: "John",
      lastName: "Doe",
      startDate: "2020-05-01",
      department: "Sales",
      dateOfBirth: "1985-07-15",
      street: "123 Main St",
      city: "Anytown",
      state: "CA",
      zipCode: "12345",
    },
    {
      firstName: "Jane",
      lastName: "Smith",
      startDate: "2018-09-15",
      department: "Marketing",
      dateOfBirth: "1990-03-20",
      street: "456 Oak Rd",
      city: "Somewhere",
      state: "NY",
      zipCode: "67890",
    },
    {
      firstName: "Bob",
      lastName: "Johnson",
      startDate: "2022-01-01",
      department: "IT",
      dateOfBirth: "1978-11-05",
      street: "789 Elm St",
      city: "Elsewhere",
      state: "TX",
      zipCode: "54321",
    },
    {
      firstName: "Alice",
      lastName: "Williams",
      startDate: "2019-03-01",
      department: "HR",
      dateOfBirth: "1992-06-10",
      street: "321 Pine Rd",
      city: "Anywhere",
      state: "FL",
      zipCode: "09876",
    },
    {
      firstName: "Tom",
      lastName: "Davis",
      startDate: "2021-11-15",
      department: "Finance",
      dateOfBirth: "1982-08-25",
      street: "159 Oak St",
      city: "Someplace",
      state: "IL",
      zipCode: "43210",
    },
  ]);
  const filteredEmployees = employees.filter((employee) =>
    `${employee.firstName} ${employee.lastName}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );
  const totalEntries = filteredEmployees.length;
  const startIndex = (currentPage - 1) * showEntries;
  const endIndex = startIndex + showEntries;
  const displayedEmployees = filteredEmployees.slice(startIndex, endIndex);
  const handleSearch = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };
  const handleShowEntries = (e) => {
    setShowEntries(Number(e.target.value));
    setCurrentPage(1);
  };
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <>
      <Header />
      <main className="container flex flex-col mx-auto my-8 h-full">
        <h1 className="text-3xl font-bold mb-6">Current Employees</h1>
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <label htmlFor="show-entries" className="mr-2">
              Show
            </label>
            <Select
              id="show-entries"
              options={[
                { value: 10, label: "10" },
                { value: 25, label: "25" },
                { value: 50, label: "50" },
                { value: 100, label: "100" },
              ]}
              value={showEntries}
              onChange={handleShowEntries}
            />
            <span className="ml-2">entries</span>
          </div>
          <div className="flex-1 max-w-md">
            <Input
              id="search"
              type="search"
              value={search}
              onChange={handleSearch}
              label="Search"
            />
          </div>
        </div>
        <div className="overflow-x-auto flex-1">
          {/* <Table>
            <TableHeader>
              <TableRow>
                <TableHead>First Name</TableHead>
                <TableHead>Last Name</TableHead>
                <TableHead>Start Date</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Date of Birth</TableHead>
                <TableHead>Street</TableHead>
                <TableHead>City</TableHead>
                <TableHead>State</TableHead>
                <TableHead>Zip Code</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {displayedEmployees.map((employee, index) => (
                <TableRow key={index}>
                  <TableCell>{employee.firstName}</TableCell>
                  <TableCell>{employee.lastName}</TableCell>
                  <TableCell>{employee.startDate}</TableCell>
                  <TableCell>{employee.department}</TableCell>
                  <TableCell>{employee.dateOfBirth}</TableCell>
                  <TableCell>{employee.street}</TableCell>
                  <TableCell>{employee.city}</TableCell>
                  <TableCell>{employee.state}</TableCell>
                  <TableCell>{employee.zipCode}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table> */}
        </div>
        <div className="flex justify-between items-center mt-4">
          <div className="text-sm text-muted-foreground">
            Showing {startIndex + 1} to {Math.min(endIndex, totalEntries)} of{" "}
            {totalEntries} entries
          </div>
          <div className="flex items-center gap-2">
            <Button
              type="button"
              onClick={() => handlePageChange(currentPage - 1)}
            >
              Previous
            </Button>
            <Button
              type="button"
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Next
            </Button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Employees;
