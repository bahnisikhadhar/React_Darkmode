import { useContext } from "react";
import {DarkModeContext} from "./DarkmodeProvider";

function App() {

  const {darkMode, toggleDarkMode}= useContext(DarkModeContext);
  return (
    <div style={{
      backgroundColor: darkMode ? "black" : "white",
      color: darkMode ? "white" : "black",
    }}>
    <div className="toggle_btn">
      <button onClick={toggleDarkMode}>Toggle</button>
    </div>
    <div className="container">
      <div className="img_container">
       { darkMode? <img src="https://cdn.pixabay.com/photo/2018/03/25/20/17/lion-3260558__340.jpg" alt="image" /> : <img src="https://wildlifeinformer.com/wp-content/uploads/2022/07/Lion.jpg" alt="" height="70vh"/> }
        
      </div>
     <div className="text_container">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias placeat, modi ex eius quibusdam, itaque corrupti magni, inventore molestias quos deserunt? Et similique enim aliquam architecto molestias aspernatur vero eveniet ducimus perferendis placeat distinctio saepe laboriosam provident amet voluptate odio consequuntur sint repellat laborum illum quisquam, deleniti velit dolorem. Minus laborum recusandae nisi officia ab dolor obcaecati excepturi voluptas illo, quos, sint similique impedit omnis possimus fugiat! Laborum dignissimos aliquid corrupti, suscipit minima quis cupiditate amet voluptas magnam similique vel commodi molestiae at optio. Voluptas aut laboriosam perferendis atque voluptatem rerum similique ipsum maiores laborum necessitatibus veritatis fugiat, cum eos numquam autem inventore labore fugit laudantium repellendus sed dicta minus commodi excepturi eveniet? Ex provident laboriosam nostrum incidunt obcaecati tenetur qui repellendus veniam, unde distinctio! Amet ut maiores iusto enim consequuntur animi minima eos laudantium consectetur sequi harum debitis deleniti incidunt veritatis quasi, aut autem maxime optio rerum nihil quod. Eos nesciunt ipsam doloribus non amet cupiditate porro ex vitae adipisci totam officia, eum delectus laudantium excepturi repudiandae sit sed voluptas. Optio, quibusdam, illo voluptatum vel, excepturi nemo ullam laudantium commodi assumenda at sapiente aliquam nam et! Dolorem officiis expedita sint facilis in corporis quo iusto fugit veniam! Sed corrupti blanditiis explicabo natus commodi modi ullam voluptatibus atque ducimus ipsam repudiandae deleniti quas alias perspiciatis veniam, eveniet excepturi impedit animi, placeat inventore esse doloribus est autem! Natus cumque reiciendis repudiandae sunt optio! Accusantium fuga exercitationem, eligendi molestias est provident necessitatibus quaerat eaque. Itaque libero harum impedit, nostrum iusto placeat nesciunt.</p>
     </div>
    </div>
    </div>
  );
}

export default App;
