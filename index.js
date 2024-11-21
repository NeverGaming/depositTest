import { formatDistanceToNow } from "date-fns";

const date = "2004-12-31 10:00:00";
document.body.textContent = `${formatDistanceToNow(new Date(date))} ago`;
