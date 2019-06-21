import React from "react";
import PropTypes from "prop-types";
class New extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>New User</h1>
        <form
          class="new_user"
          id="new_user"
          enctype="multipart/form-data"
          action="/users"
          accept-charset="UTF-8"
          method="post"
        >
          <input name="utf8" type="hidden" value="&#x2713;" />
          <input
            type="hidden"
            name="authenticity_token"
            value={this.props.authenticityToken}
          />

          <div class="field">
            <label for="user_image">Image</label>
            <input type="file" name="user[image]" id="user_image" />
          </div>

          <div class="field">
            <label for="user_name">Name</label>
            <input type="text" name="user[name]" id="user_name" />
          </div>

          <div class="actions">
            <input
              type="submit"
              name="commit"
              value="Create User"
              data-disable-with="Create User"
            />
          </div>
        </form>
      </React.Fragment>
    );
  }
}

New.propTypes = {
  authenticityToken: PropTypes.string
};
export default New;
