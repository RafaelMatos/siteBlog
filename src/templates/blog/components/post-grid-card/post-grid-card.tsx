type PostGridCardProps = {
  children: React.ReactNode;
};

export const PostGridCard = ({ children }: PostGridCardProps) => {
  return (
    <div className="container grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">{children}</div>
  );
};
