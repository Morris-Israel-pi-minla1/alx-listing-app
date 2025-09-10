import React from "react";
import Card from "../components/common/Card";
import Button from "../components/common/Button";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        Welcome to ALX Listing App(AirBnB Clone)
      </h1>

      <Card
        title="Cozy Apartment in Sierra Leone"
        description="A beautiful 2-bedroom apartment close to the city center in Freetown."
      />

      <div className="mt-4">
        <Button
          label="Book Now"
          onClick={() => alert("Booking feature coming soon!")}
        />
      </div>
    </div>
  );
}
