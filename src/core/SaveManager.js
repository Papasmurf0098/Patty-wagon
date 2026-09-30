const KEY = "patty-wagon-free-roam-v1";
export function loadSave(storage = globalThis.localStorage) {
  try {
    const raw = JSON.parse(storage.getItem(KEY));
    return {
      version: 1,
      coins: [
        ...new Set(
          (raw?.coins ?? []).filter(
            (x) => Number.isInteger(x) && x >= 0 && x < 96,
          ),
        ),
      ],
      activities: [
        ...new Set(
          (raw?.activities ?? []).filter((x) =>
            ["jump", "smash", "garden"].includes(x),
          ),
        ),
      ],
      broken: [
        ...new Set(
          (raw?.broken ?? []).filter(
            (x) => Number.isInteger(x) && x >= 0 && x < 42,
          ),
        ),
      ],
    };
  } catch {
    return { version: 1, coins: [], activities: [], broken: [] };
  }
}
export function writeSave(save, storage = globalThis.localStorage) {
  try {
    storage.setItem(KEY, JSON.stringify(save));
    return true;
  } catch {
    return false;
  }
}
