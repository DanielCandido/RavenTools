interface Props {
  width: string;
  height: string;
  color: string;
}

const RouterIcon = ({ color, height, width }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      height={height}
      width={width}
      version="1.1"
      id="Capa_1"
      viewBox="0 0 24 24"
    >
      <path d="M21.4,10.6l-8-8c-0.8-0.8-2-0.8-2.8,0l-8,8c-0.8,0.8-0.8,2,0,2.8l8,8c0.8,0.8,2,0.8,2.8,0l8-8 C22.2,12.6,22.2,11.4,21.4,10.6z M14,14.5V12h-4v3H8v-3c0-1.1,0.9-2,2-2h4V7.5l3.5,3.5L14,14.5z" />
    </svg>
  );
};

export default RouterIcon;
