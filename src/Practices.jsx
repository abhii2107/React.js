export const Practices = ()=>{
    const student = [1,2];
    return(
        <>
            {/* <p>{student.length && "no student found"}</p> */}

            // 1st
            {/* <p>{student.length === 0 && "no student found"}</p> */}
            {/* 2nd */}
            <p>{!student.length && "no student found"}</p>
            <p>number of students:{student.length}</p>
        </>
    )  
     
};