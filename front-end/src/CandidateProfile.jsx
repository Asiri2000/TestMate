export const CandidateProfile = () => {

 const name = "Peter Parker";
 const profession = "Software Engineer";
 const available = true;

     return(
          <div>
              <h3>{name}</h3>
              <h4>{profession}</h4>
              <h5> {available ? "Available" : "Not Available"} </h5>

          </div>

     )

}