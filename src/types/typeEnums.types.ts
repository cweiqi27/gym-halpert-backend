export const WorkoutTypeArr = ["BODYWEIGHT", "WEIGHTED", "ANY"] as const;
export type WorkoutType = (typeof WorkoutTypeArr)[number];

export const SetTypeArr = ["WARMUP", "NORMAL", "DROP", "1RM"] as const;
export type SetType = (typeof SetTypeArr)[number];

export const EquipmentArr = ["BARBELL", "DUMBBELL", "MACHINE", "CABLE", "PLATES", "KETTLEBELL", ""]