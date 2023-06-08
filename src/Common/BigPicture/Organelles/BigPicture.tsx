import { Parallax } from "react-parallax";
import "../Styles/BigPicture.css";
export interface IBigPicture {
  text: string;
  picture: string;
  size?: string;
  littleTitle?: string;
  newStyle?:boolean;
}
export const BigPicture = (params: IBigPicture) => {
  return (
    <div
      className="BigPicture__General"
      style={params.size ? { height: `${params.size}` } : { height: "100vh" }}
    >
      <Parallax bgImage={params.picture} strength={500}>
        <div
          style={
            params.size ? { height: `${params.size}` } : { height: "100vh" }
          }
        />
      </Parallax>
      {params.littleTitle ? (
        <div className="BigPicture__General__TitleWithLittle">
          <div
            style={{ fontSize: "60px" }}
            className="BigPicture__General__TitleWithLittle__Title"
          >
            {params.text}
          </div>
          <div
            style={{ fontSize: "22px" }}
            className="BigPicture__General__TitleWithLittle__Little"
          >
            {params.littleTitle}
          </div>
        </div>
      ) : (
        <div className="BigPicture__General__Title" style={params.newStyle ? { fontSize: "72px"}:{}}>{params.text}</div>
      )}
    </div>
  );
};
