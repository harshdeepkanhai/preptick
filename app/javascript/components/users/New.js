import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

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
            <TextField
              type="file"
              name="user[image]"
              label="Image"
              required
              id="outlined-required"
              margin="normal"
              variant="outlined"
            />
          </div>

          <div class="field">
            <TextField
              type="text"
              name="user[name]"
              label="Name"
              required
              id="outlined-required"
              margin="normal"
              variant="outlined"
            />
          </div>

          <div class="actions">
            <Button
              variant="contained"
              color="primary"
              type="submit"
              name="commit"
              value="Create User"
              data-disable-with="Create User"
            >
              Create User
            </Button>
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
