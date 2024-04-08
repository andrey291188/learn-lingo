import teachers from "../../service/teachers.json"

import { useState } from "react";
import Details from "../../components/RenderCard/Details";
import Preview from "../../components/RenderCard/Preview";
import { StyledTeachersContainer } from "./Teacher.styled";

function Teachers() {
  const [cardVisibleDetails, setCardVisibleDetails] = useState("")
    return (
      <StyledTeachersContainer>
       { teachers.map((data)=>(
        data.id === cardVisibleDetails ? <Details data={data} setVisibleDetails={setCardVisibleDetails} key={data.id}/> : <Preview data={data} setVisibleDetails={setCardVisibleDetails} key={data.id}/>
       ))}
      </StyledTeachersContainer>
    );
  }
  
  export default Teachers;