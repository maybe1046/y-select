const UserDetails = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;

  return <div>User Details Page for User {id}</div>;
};

export default UserDetails;
