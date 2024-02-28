export interface Props {
  background?: string;
  borderColor?: string;
  Icon: React.JSX.Element;
}

export const Icon = ({
  background = "#fffaff",
  borderColor = "#BFC0C0",
  Icon,
}: Props) => {
  return (
    <div
      className={`flex items-center justify-center p-2 rounded-md border-[${borderColor}]-[1px] bg-[${background}]`}
    >
      {Icon}
    </div>
  );
};
