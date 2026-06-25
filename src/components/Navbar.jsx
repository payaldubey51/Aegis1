import { Link, useNavigate } from "react-router-dom";

function Navbar(){

const navigate=
useNavigate();

const logout=()=>{

localStorage.removeItem(
"token"
);

localStorage.removeItem(
"name"
);

navigate(
"/login"
);

};

const styles={

nav:{

display:"flex",

justifyContent:
"space-between",

alignItems:
"center",

padding:"20px 28px",

borderRadius:"20px",

background:
"rgba(255,255,255,.7)",

backdropFilter:
"blur(16px)",

marginBottom:"40px"

},

logo:{

fontSize:"32px",

fontWeight:"900",

color:"#dc2626"

},

menu:{

display:"flex",

gap:"10px",

flexWrap:"wrap"

},

btn:{

padding:"12px 18px",

borderRadius:"12px",

textDecoration:"none",

background:"#dc2626",

color:"white",

fontWeight:"700"

},

logout:{

padding:"12px 18px",

border:"none",

borderRadius:"12px",

background:"#111827",

color:"white",

cursor:"pointer"

}

};

return(

<div style={styles.nav}>

<div style={styles.logo}>

SafeHer

</div>

<div style={styles.menu}>

<Link
to="/"
style={styles.btn}
>

Home

</Link>

<Link
to="/dashboard"
style={styles.btn}
>

Dashboard

</Link>

<Link
to="/profile"
style={styles.btn}
>

Profile

</Link>

<Link
to="/admin"
style={styles.btn}
>

Admin

</Link>

<button
style={styles.logout}
onClick={logout}

>

Logout

</button>

</div>

</div>

);

}

export default Navbar;
