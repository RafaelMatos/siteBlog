type AvatarDescriptionProps = {
  children: React.ReactNode;
};

export const AvatarDescription = ({ children }: AvatarDescriptionProps) => {
  return <div className="text-body-xs text-gray-300">{children}</div>;
};
