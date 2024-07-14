import { FC } from "react";
import "./index.css";

const App: FC = () => (
  <div className="flex flex-col items-center w-full max-w-md mx-auto mt-10 space-y-6">
    <h1 className="text-3xl font-bold">HRnet</h1>
    <a href="#" className="text-blue-600 underline">
      View Current Employees
    </a>
    <h2 className="text-2xl font-semibold">Create Employee</h2>
    <form className="w-full space-y-4">
      <div className="space-y-2">
        <label htmlFor="first-name" className="block text-sm font-medium">
          First Name
        </label>
        <input
          type="text"
          id="first-name"
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="last-name" className="block text-sm font-medium">
          Last Name
        </label>
        <input
          type="text"
          id="last-name"
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="dob" className="block text-sm font-medium">
          Date of Birth
        </label>
        <input
          type="date"
          id="dob"
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="start-date" className="block text-sm font-medium">
          Start Date
        </label>
        <input
          type="date"
          id="start-date"
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>
      <fieldset className="p-4 border rounded-md">
        <legend className="px-2 text-sm font-medium">Address</legend>
        <div className="space-y-2">
          <label htmlFor="street" className="block text-sm font-medium">
            Street
          </label>
          <input
            type="text"
            id="street"
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="city" className="block text-sm font-medium">
            City
          </label>
          <input
            type="text"
            id="city"
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="state" className="block text-sm font-medium">
            State
          </label>
          <select id="state" className="w-full px-3 py-2 border rounded-md">
            <option value="alabama">Alabama</option>
            <option value="alaska">Alaska</option>
            <option value="arizona">Arizona</option>
            <option value="arkansas">Arkansas</option>
            <option value="california">California</option>
            <option value="colorado">Colorado</option>
            <option value="connecticut">Connecticut</option>
            <option value="delaware">Delaware</option>
            <option value="florida">Florida</option>
            <option value="georgia">Georgia</option>
            <option value="hawaii">Hawaii</option>
            <option value="idaho">Idaho</option>
            <option value="illinois">Illinois</option>
            <option value="indiana">Indiana</option>
            <option value="iowa">Iowa</option>
            <option value="kansas">Kansas</option>
            <option value="kentucky">Kentucky</option>
            <option value="louisiana">Louisiana</option>
            <option value="maine">Maine</option>
            <option value="maryland">Maryland</option>
            <option value="massachusetts">Massachusetts</option>
            <option value="michigan">Michigan</option>
            <option value="minnesota">Minnesota</option>
            <option value="mississippi">Mississippi</option>
            <option value="missouri">Missouri</option>
            <option value="montana">Montana</option>
            <option value="nebraska">Nebraska</option>
            <option value="nevada">Nevada</option>
            <option value="new-hampshire">New Hampshire</option>
            <option value="new-jersey">New Jersey</option>
            <option value="new-mexico">New Mexico</option>
            <option value="new-york">New York</option>
            <option value="north-carolina">North Carolina</option>
            <option value="north-dakota">North Dakota</option>
            <option value="ohio">Ohio</option>
            <option value="oklahoma">Oklahoma</option>
            <option value="oregon">Oregon</option>
            <option value="pennsylvania">Pennsylvania</option>
            <option value="rhode-island">Rhode Island</option>
            <option value="south-carolina">South Carolina</option>
            <option value="south-dakota">South Dakota</option>
            <option value="tennessee">Tennessee</option>
            <option value="texas">Texas</option>
            <option value="utah">Utah</option>
            <option value="vermont">Vermont</option>
            <option value="virginia">Virginia</option>
            <option value="washington">Washington</option>
            <option value="west-virginia">West Virginia</option>
            <option value="wisconsin">Wisconsin</option>
            <option value="wyoming">Wyoming</option>
          </select>
        </div>
        <div className="space-y-2">
          <label htmlFor="zip-code" className="block text-sm font-medium">
            Zip Code
          </label>
          <input
            type="text"
            id="zip-code"
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
      </fieldset>
      <div className="space-y-2">
        <label htmlFor="department" className="block text-sm font-medium">
          Department
        </label>
        <select id="department" className="w-full px-3 py-2 border rounded-md">
          <option value="sales">Sales</option>
          <option value="marketing">Marketing</option>
          <option value="engineering">Engineering</option>
          <option value="hr">HR</option>
          <option value="finance">Finance</option>
        </select>
      </div>
      <button
        type="submit"
        className="px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-md"
      >
        Save
      </button>
    </form>
  </div>
);

export default App;
