import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function PickTopic({ setTopic }) {
  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">
        Select topic:
      </FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel
          value="coding"
          control={<Radio />}
          label="Coding"
          onClick={() => setTopic("coding")}
        />
        <FormControlLabel
          value="football"
          control={<Radio />}
          label="Football"
          onClick={() => setTopic("football")}
        />
        <FormControlLabel
          value="cooking"
          control={<Radio />}
          label="Cooking"
          onClick={() => setTopic("cooking")}
        />
      </RadioGroup>
    </FormControl>
  );
}
