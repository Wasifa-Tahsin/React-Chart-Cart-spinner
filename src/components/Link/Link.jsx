import PropTypes from "prop-types";

const Link = ({path}) => {
    return (
        <li className="mr-12 hover:bg-yellow-600 px-6 " ><a href={path.path}></a>{path.name}</li>
    );
};

Link.propTypes={
    path :PropTypes.object
}

export default Link;