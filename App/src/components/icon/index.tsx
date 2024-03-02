export interface Props {
  background?: string;
  borderColor?: string;
  children: React.JSX.Element;
}

export const Icon = ({
  background = "#fffaff",
  borderColor = "#BFC0C0",
  children,
}: Props) => {
  return (
    <div
      className={`flex items-center justify-center p-2 rounded-md border-[#BFC0C0]-[1px] bg-[#fffaff]`}
    >
      {children}
    </div>
  );
};
