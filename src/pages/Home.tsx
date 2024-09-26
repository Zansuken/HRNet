import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "doom-ui";

const Home: FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center w-full max-w-md mx-auto mt-10 space-y-6">
      <h1 className="text-3xl font-bold">HRnet</h1>
      <div className="flex w-full">
        <div className="w-1/2 flex justify-end pr-2">
          <Button type="button" onClick={() => navigate("/employees")}>
            See Employees
          </Button>
        </div>
        <div className="w-1/2 flex justify-start pl-2">
          <Button type="button" onClick={() => navigate("/create-employee")}>
            Create new Employee
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
