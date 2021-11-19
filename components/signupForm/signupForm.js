import { Grid } from "@mui/material";
import styles from "./signupForm.module.scss";

function SignupForm() {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item md={6} className={styles.form_group}>
          <span>
            Destination Country <span className={styles.important}>*</span>
          </span>
          <select>
            <option value="">usa</option>
          </select>
        </Grid>
        <Grid item md={6} className={styles.form_group}>
          <span>
            Institution Name <span className={styles.important}>*</span>
          </span>
          <input type="text" placeholder="Kingdom Collage London" />
        </Grid>
        <Grid item md={6} className={styles.form_group}>
          <span>
            Contact Designation <span className={styles.important}>*</span>
          </span>
          <input type="text" placeholder="Marketing Manager" />
        </Grid>
        <Grid item md={6} className={styles.form_group}>
          <span>
            Contact Name <span className={styles.important}>*</span>
          </span>
          <input type="text" placeholder="John Wick" />
        </Grid>
        <Grid item md={6} className={styles.form_group}>
          <span>
            Contact Email <span className={styles.important}>*</span>
          </span>
          <input type="text" placeholder="johnwick@email.com" />
        </Grid>
        <Grid item md={6} className={styles.form_group}>
          <span>
            Contact Phone Number <span className={styles.important}>*</span>
          </span>
          <input type="text" placeholder="0123 456 789" />
        </Grid>
        <Grid item md={12} className={styles.form_group}>
          <span>Any Additional Comment</span>
          <textarea placeholder="Type Here"></textarea>
        </Grid>
      </Grid>
    </div>
  );
}

export default SignupForm;
