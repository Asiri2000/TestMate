export const UserProfile = () => {

return (
    
    <>
    <h1>User Profile</h1>
    <p>Author : Asiri Weerasinghe </p>
    </>
);
};

export const ContactForm = () => {

    return(
<>
        <form className="contact-form">

          <label htmlFor="name">Name</label>
         <input type="text" placeholder="Name" id="name"/>
         <br />
         <label htmlFor="email">Email</label>
         <input type="email" placeholder="Email" id="email"/>


  

        </form>
</>
    )
};

