export const Eventprops = () =>{
    const HandleWelcomeUser = (user) =>{
        alert(`hey,${user}`);
    }

    const handleHover = ()=>{
        alert(`Hey Thanks for hovering me`);
    }
    return(
        <>
            <WelcomeUser onClick = {() =>HandleWelcomeUser("vinod")}
                onMouseEnter = {handleHover}/>
        
        
        </>
    )
    
}
const WelcomeUser = (props) =>{
    const {onClick,onMouseEnter} = props;
        const handleGreeting = ()=>{
            console.log(`Hey User, Welcome`);
            props.onClick();
            
        }
        return(
            <>
                <button onClick={onClick}>Click</button>
                <button onMouseEnter={onMouseEnter}>Hover me</button>
                <button onClick={handleGreeting}>Greeting</button>
            
            
            </>
        )   
    }