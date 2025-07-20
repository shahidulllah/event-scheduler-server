export function categorizeEvent(
  title: string,
  notes: string = ""
): "Work" | "Personal" | "Other" {
  const content = `${title} ${notes}`.toLowerCase();
  const workKeywords = ["meeting", "project", "client", "deadline"];
  const personalKeywords = ["birthday", "family", "vacation", "friend"];

  if (workKeywords.some((keyword) => content.includes(keyword))) return "Work";
  if (personalKeywords.some((keyword) => content.includes(keyword)))
    return "Personal";
  return "Other";
}
