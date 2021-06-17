import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Moment from "react-moment";
import { deleteEducation } from "../../actions/profile";
function Education({ education, deleteEducation }) {
  const educations = education.map((exp) => (
    <tr key={exp.id}>
      <td>{exp.school}</td>
      <td className="hide-sm">{exp.degree}</td>
      <td>
        <Moment format="YYYY/MM/DD">{exp.from}</Moment>-
        {exp.to === null ? (
          "NOW"
        ) : (
          <Moment format="YYYY/MM/DD">{exp.to}</Moment>
        )}
      </td>
      <td>
        <button
          className="btn btn-danger"
          onClick={() => deleteEducation(exp.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  ));
  return (
    <>
      <h2 class="my-2">Education Credentials</h2>
      <table class="table">
        <thead>
          <tr>
            <th>School</th>
            <th class="hide-sm">Degree</th>
            <th class="hide-sm">Years</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{educations}</tbody>
      </table>
    </>
  );
}

Education.propTypes = {
  education: PropTypes.object.isRequired,
  deleteEducation: PropTypes.func.isRequired,
};

export default connect(null, { deleteEducation })(Education);
