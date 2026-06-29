const WA_NUMBER = "917303337001";
const WA_MSG =
  "Hi GrinXO! I'd like to plan my child's birthday.\n\nMy child's age:\nParty date:\nLocality in Gurgaon:\nApprox. guest count:\n\n(Anything else you'd like — venue type, theme, services?)";

export const waLink =
  "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(WA_MSG);
