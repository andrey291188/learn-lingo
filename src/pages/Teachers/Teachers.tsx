import teachers from "../../service/teachers.json"

import Preview from "../../components/RenderCard/Preview";
import { StyledTeachersContainer } from "./Teacher.styled";

function Teachers() {
  
    return (
      <StyledTeachersContainer>
       {teachers.map((data)=>(
        <Preview data={data} key={data.id}/>
       ))}
      </StyledTeachersContainer>
    );
  }
  
  export default Teachers;