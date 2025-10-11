// coding challenge
function profile() {
    return (
        <div>
            <h1> Profile card challenge</h1>
            <ProfileCard
                name  = "alice"
                age = {30}
                greetings = {
                    <div>
                        <strong>Hi! Alice have a wonderful day</strong>
                    </div>
                }
            
            
            >
            <p>HObbies: reading,writing,hiking</p>
            <button>Contact</button>



            </ProfileCard>



        </div>
    )
}
export default profile;

function ProfileCard(props){
    return(
        <>
        <h2>name:{props.name}</h2>
        <p>age:{props.age}</p>
        <p>{props.greetings}</p>
        <div>{props.children}</div>
        
        </>
    )
}