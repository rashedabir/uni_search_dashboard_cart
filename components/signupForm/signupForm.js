import { Grid } from "@mui/material";
import styles from "./signupForm.module.scss";

function SignupForm() {
  return (
    <div className={styles.form}>
      <Grid container spacing={5}>
        <Grid item md={6} className={styles.form_group}>
          <label>
            Destination Country <span className={styles.important}>*</span>
          </label>
          <select>
            <option value="">usa</option>
          </select>
        </Grid>
        <Grid item md={6} className={styles.form_group}>
          <label>
            Institution Name <span className={styles.important}>*</span>
          </label>
          <input type="text" placeholder="Kingdom Collage London" />
        </Grid>
        <Grid item md={6} className={styles.form_group}>
          <label>
            Contact Designation <span className={styles.important}>*</span>
          </label>
          <input type="text" placeholder="Marketing Manager" />
        </Grid>
        <Grid item md={6} className={styles.form_group}>
          <label>
            Contact Name <span className={styles.important}>*</span>
          </label>
          <input type="text" placeholder="John Wick" />
        </Grid>
        <Grid item md={6} className={styles.form_group}>
          <label>
            Contact Email <span className={styles.important}>*</span>
          </label>
          <input type="text" placeholder="johnwick@email.com" />
        </Grid>
        <Grid item md={6} className={styles.form_group}>
          <label>
            Contact Phone Number <span className={styles.important}>*</span>
          </label>
          <input placeholder="0123 456 789" />
        </Grid>
        <Grid item md={12} className={styles.form_group}>
          <label>Any Additional Comment</label>
          <textarea placeholder="Type Here"></textarea>
        </Grid>
      </Grid>
      <p>
        By submitting your info in the form above, you agree to our Terms of Use
        and Privacy Notice. We may use this info to contact you and/or use data
        from third parties to personalize your experience.
      </p>
      <div className={styles.action_btn}>
        <button className="btn btn-bg btn-secondary">Submit</button>
      </div>
    </div>
  );
}

export default SignupForm;
