// Nominal dimensions (mm) of forged open turnbuckle bodies from DIN 1480:2005-09, Table 1.
// Body dimensions agree with the Würth (03543), Mädler, Haklift and cast/RST catalogues.
// DIN 1480 covers the body only: end fittings, overall lengths and load ratings are
// not standardised and vary by manufacturer, so none are given here.

export interface TurnbuckleBodySize {
  thread: string; // d1, ISO metric coarse, one end right-hand and one left-hand
  bodyLength: number; // l1
  takeUp: number; // adjustment, approximate
  threadLength: number; // m1, minimum
  bodyWidth: number; // e
  windowWidth: number; // f
  bossDiameter: number; // d2
}

export const din1480BodySizes: TurnbuckleBodySize[] = [
  { thread: 'M6', bodyLength: 110, takeUp: 80, threadLength: 12, bodyWidth: 19, windowWidth: 9, bossDiameter: 12 },
  { thread: 'M8', bodyLength: 110, takeUp: 75, threadLength: 15, bodyWidth: 23, windowWidth: 11, bossDiameter: 15 },
  { thread: 'M10', bodyLength: 125, takeUp: 85, threadLength: 18, bodyWidth: 30, windowWidth: 14, bossDiameter: 18 },
  { thread: 'M12', bodyLength: 125, takeUp: 80, threadLength: 21, bodyWidth: 34, windowWidth: 16, bossDiameter: 21 },
  { thread: 'M16', bodyLength: 170, takeUp: 110, threadLength: 27, bodyWidth: 42, windowWidth: 20, bossDiameter: 27 },
  { thread: 'M20', bodyLength: 200, takeUp: 130, threadLength: 34, bodyWidth: 52, windowWidth: 24, bossDiameter: 34 },
  { thread: 'M24', bodyLength: 255, takeUp: 170, threadLength: 39, bodyWidth: 60, windowWidth: 28, bossDiameter: 39 },
  { thread: 'M30', bodyLength: 255, takeUp: 160, threadLength: 45, bodyWidth: 74, windowWidth: 34, bossDiameter: 45 },
  { thread: 'M36', bodyLength: 295, takeUp: 180, threadLength: 55, bodyWidth: 86, windowWidth: 40, bossDiameter: 55 },
  { thread: 'M42', bodyLength: 330, takeUp: 200, threadLength: 63, bodyWidth: 104, windowWidth: 50, bossDiameter: 63 },
  { thread: 'M48', bodyLength: 355, takeUp: 195, threadLength: 78, bodyWidth: 135, windowWidth: 65, bossDiameter: 80 },
  { thread: 'M56', bodyLength: 355, takeUp: 195, threadLength: 78, bodyWidth: 135, windowWidth: 65, bossDiameter: 80 },
];
