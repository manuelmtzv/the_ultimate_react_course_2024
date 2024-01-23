import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import styles from "@components/Form/Form.module.css";
import Button from "@components/Button";
import BackButton from "@components/BackButton";
import { useUrlPosition } from "@hooks/useUrlPosition";
import { useReverseGeocoding } from "@hooks/useReverseGeocoding";
import FlagEmojiToImg from "../FlagEmojiToImg";
import { convertToEmoji } from "@helpers/convertToEmoji";
import Message from "@components/Message";
import Spinner from "@components/Spinner";

function Form() {
  const { lat, lng } = useUrlPosition();
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [emoji, setEmoji] = useState("");
  const { reverseGeocoding, isLoadingGeocoding, geocodingError } =
    useReverseGeocoding({
      lat,
      lng,
    });

  useEffect(() => {
    if (reverseGeocoding) {
      setCityName(reverseGeocoding.city || reverseGeocoding.locality || "");
      setCountry(reverseGeocoding.countryName ?? "");
      setEmoji(convertToEmoji(reverseGeocoding.countryCode));
    }
  }, [reverseGeocoding]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  if (isLoadingGeocoding) return <Spinner />;

  if (!lat || !lng)
    return <Message message="Start with clicking somewhere in the map!" />;

  if (geocodingError) return <Message message={geocodingError} />;

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.row}>
        <label htmlFor="cityName">City name</label>
        <input
          id="cityName"
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
        />
        <span className={styles.flag}>{emoji && FlagEmojiToImg(emoji)}</span>
      </div>

      <div className={styles.row}>
        <label htmlFor="date">When did you go to {cityName}?</label>
        {/* <input
          id="date"
          onChange={(e) => setDate(new Date(e.target.value))}
          value={date.toLocaleDateString()}
        /> */}
        <DatePicker selected={date} onChange={(date: Date) => setDate(date)} />
      </div>

      <div className={styles.row}>
        <label htmlFor="notes">Notes about your trip to {cityName}</label>
        <textarea
          id="notes"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
        />
      </div>

      <div className={styles.buttons}>
        <Button buttonType="primary">Add</Button>
        <BackButton />
      </div>
    </form>
  );
}

export default Form;
