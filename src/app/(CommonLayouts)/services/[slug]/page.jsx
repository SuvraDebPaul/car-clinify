import React from "react";

const ServiceDetailsPage = async ({ params }) => {
  const { slug: serviceId } = await params;

  console.log(serviceId);
  return <div>Service Details Page</div>;
};

export default ServiceDetailsPage;
