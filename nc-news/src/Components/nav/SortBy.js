import {
  FormLabel,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
export default function SortBy({ setSortBy, setSortByChanged, sortBy }) {
  function onValueChange(event) {
    setSortBy(event);
    setSortByChanged(Date.now());
  }
  return (
    <div className="sort-by">
      <FormControl>
        <div className="sort-by-text">
          <FormLabel id="demo-form-control-label-placement">
            Sort by: {sortBy}
          </FormLabel>
        </div>
        <RadioGroup
          row
          aria-labelledby="demo-form-control-label-placement"
          name="position"
          defaultValue="top"
        >
          <FormControlLabel
            value="title"
            control={<Radio />}
            label="title"
            labelPlacement="top"
            onClick={(event) => onValueChange(event.target.value)}
          />
          <FormControlLabel
            value="created_at"
            control={<Radio />}
            label="date"
            labelPlacement="top"
            onClick={(event) => onValueChange(event.target.value)}
          />
          <FormControlLabel
            value="votes"
            control={<Radio />}
            label="votes"
            labelPlacement="top"
            onClick={(event) => onValueChange(event.target.value)}
          />
          <FormControlLabel
            value="comment_count"
            control={<Radio />}
            label="comments"
            labelPlacement="top"
            onClick={(event) => onValueChange(event.target.value)}
          />
          <FormControlLabel
            value="author"
            control={<Radio />}
            label="author"
            labelPlacement="top"
            onClick={(event) => onValueChange(event.target.value)}
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
}
