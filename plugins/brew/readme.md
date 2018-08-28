# Set Program Settings ('?', 63, 0x3F)
Description: Sets the specified saved program's settings
Command Code: '?' (ASCII), 63 (Decimal), 0x3F (Hex)
Command Index: Program Number (0-19)
Command Parameters:
  Program Name
  Batch Volume (thousandths of gal/l)
  Grain Weight (thousandths of lb/kg)
  Mash Ratio (hundreths of lbs/kg per qt/l, 0 = No Sparge)
  Dough In Temperature
  Dough in Minutes
  Acid Temperature
  Acid Minutes
  Protein Temperature
  Protein Minutes
  Sacch Temperature
  Sacch Minutes
  Sacch2 Temperature
  Sacch2 Minutes
  Mashout Temperature
  Mashout Minutes
  Sparge Temp
  HLT Setpoint
  Boil Mins
  Pitch Temp
  Boil Additions (Bit Mask)
  Mash Liquor Heat Source (0=HLT, 1=Mash)
Response Code:
  '@' (ASCII), 64 (Decimal), 0x40 (Hex)
Response Parameters:
  Program Name
  Batch Volume (thousandths of gal/l)
  Grain Weight (thousandths of lb/kg)
  Mash Ratio (hundreths of lbs/kg per qt/l, 0 = No Sparge)
  Dough In Temperature
  Dough in Minutes
  Acid Temperature
  Acid Minutes
  Protein Temperature
  Protein Minutes
  Sacch Temperature
  Sacch Minutes
  Sacch2 Temperature
  Sacch2 Minutes
  Mashout Temperature
  Mashout Minutes
  Sparge Temp
  HLT Setpoint
  Boil Mins
  Pitch Temp
  Boil Additions (Bit Mask)
  Mash Liquor Heat Source (0=HLT, 1=Mash)

# Get Program Settings (@, 64, 0x40)
Description: Returns the specified saved program's settings
Command Code: '@' (ASCII), 64 (Decimal), 0x40 (Hex)
Command Index: Program Number (0-19)
Command Parameters: N/A
Response Code: '@' (ASCII), 64 (Decimal), 0x40 (Hex)
Response Parameters:
  Program Name
  Batch Volume (thousandths of gal/l)
  Grain Weight (thousandths of lb/kg)
  Mash Ratio (hundreths of lbs/kg per qt/l, 0 = No Sparge)
  Dough In Temperature
  Dough in Minutes
  Acid Temperature
  Acid Minutes
  Protein Temperature
  Protein Minutes
  Sacch Temperature
  Sacch Minutes
  Sacch2 Temperature
  Sacch2 Minutes
  Mashout Temperature
  Mashout Minutes
  Sparge Temp
  HLT Setpoint
  Boil Mins
  Pitch Temp
  Boil Additions (Bit Mask)
  Mash Liquor Heat Source (0=HLT, 1=Mash)

# Get Output Settings (D, 68, 0x44)
Description: Requests the output settings for a specified heat output
Command Code: D (ASCII), 68 (Decimal), 0x44 (Hex)
Command Index: Vessel (0=HLT, 1=Mash, 2=Kettle, 3=Steam)
Command Parameters: N/A
Response Code: D (ASCII), 68 (Decimal), 0x44 (Hex)
Response Parameters:
Mode (0=On/Off, 1=PID)
PID Cycle (In seconds)
PID P Gain (0-255)
PID I Gain (0-255)
PID D Gain (0-255)
Hysteresis (In tenths of degrees) if Vessel = 0-2 or Steam Zero if Vessel = 3
Steam Target Pressure (Vessel = 3 Only; Otherwise blank)
Steam Pressure Sensor Sensitivity (Vessel = 3 Only; Otherwise blank)

# Get Temperature Sensor Address (F, 70, 0x46)
Description: Requests the address of the specified temperature sensor
Command Code: F (ASCII), 70 (Decimal), 0x46 (Hex)
Command Index: Sensor (0=HLT, 1=Mash, 2=Kettle, 3=H2O In, 4=H2O Out, 5=Beer Out, 6=AUX1, 7=AUX2, 8=AUX3)
Command Parameters: N/A
Response Code: F (ASCII), 70 (Decimal), 0x46 (Hex)
Response Parameters:
Byte 0 (0-255)
Byte 1 (0-255)
Byte 2 (0-255)
Byte 3 (0-255)
Byte 4 (0-255)
Byte 5 (0-255)
Byte 6 (0-255)
Byte 7 (0-255)

# Get Version Information (G, 71, 0x47)
Description:
  BrewTroller Firmware Version and Build Information. Called during setup() initialization
Command Code:
  G (ASCII), 71 (Decimal), 0x47 (Hex)
Command index: N/A
Command Parameters: N/A
Response Code:
  G (ASCII), 71 (Decimal), 0x47 (Hex)
Response Parameters:
  Version String
  Build Number

# Scan for Temperature Sensor (J, 74, 0x4A)
Description: Returns the first unassigned temperature sensor address found
Command Code: J (ASCII), 74 (Decimal), 0x4A (Hex)
Command Index: N/A
Command Parameters: N/A
Response Code: J (ASCII), 74 (Decimal), 0x4A (Hex)
Response Parameters:
Byte 1 (0-255)
Byte 2 (0-255)
Byte 3 (0-255)
Byte 4 (0-255)
Byte 5 (0-255)
Byte 6 (0-255)
Byte 7 (0-255)
Byte 8 (0-255)

# Set Boil Temperature (K, 75, 0x4B)
Description: Sets the system boil temperature
Command Code: K (ASCII), 75 (Decimal), 0x4B (Hex)
Command Index: N/A
Command Parameters
Temperature (In Degrees)
Response Code: A (ASCII), 65 (Decimal), 41 (Hex)
Response Parameters:
Temperature (In Degrees)

# Set Temperature Sensor (P, 80, 0x50)
Description: Sets the address of the specified Temperature Sensor
Command Code: P (ASCII), 80 (Decimal), 0x50 (Hex)
Command Index: Sensor (0=HLT, 1=Mash, 2=Kettle, 3=H2O In, 4=H2O Out, 5=Beer Out, 6=AUX1, 7=AUX2, 8=AUX3)
Command Parameters:
  Byte 0 (0-255)
  Byte 1 (0-255)
  Byte 2 (0-255)
  Byte 3 (0-255)
  Byte 4 (0-255)
  Byte 5 (0-255)
  Byte 6 (0-255)
  Byte 7 (0-255)
Response Code: F (ASCII), 70 (Decimal), 0x46 (Hex)
Response Parameters:
  Byte 0 (0-255)
  Byte 1 (0-255)
  Byte 2 (0-255)
  Byte 3 (0-255)
  Byte 4 (0-255)
  Byte 5 (0-255)
  Byte 6 (0-255)
  Byte 7 (0-255)

# Advance Step (S, 83, 0x53) Command
Description: Advances the specified step to the next brew step
Command Code: S (ASCII), 83 (Decimal), 0x53 (Hex)
Command Index: Brew Step
  0: Fill
  1: Delay
  2: Preheat
  3: Grain In
  4: Refill
  5: Dough In
  6: Acid
  7: Protein
  8: Sacch
  9: Sacch2
  10: Mash Out
  11: Mash Hold
  12: Sparge
  13: Boil
  14: Chill
Command Parameters: N/A
Response Code: n (ASCII), 111 (Decimal), 0x6E (Hex)
Response Parameters:
  Fill (Active Program ID or 255 = Not Active)
  Delay (Active Program ID or 255 = Not Active)
  Preheat (Active Program ID or 255 = Not Active)
  Grain In (Active Program ID or 255 = Not Active)
  Refill (Active Program ID or 255 = Not Active)
  Dough In (Active Program ID or 255 = Not Active)
  Acid (Active Program ID or 255 = Not Active)
  Protein (Active Program ID or 255 = Not Active)
  Sacch (Active Program ID or 255 = Not Active)
  Sacch2 (Active Program ID or 255 = Not Active)
  Mash Out (Active Program ID or 255 = Not Active)
  Mash Hold (Active Program ID or 255 = Not Active)
  Sparge (Active Program ID or 255 = Not Active)
  Boil (Active Program ID or 255 = Not Active)
  Chill (Active Program ID or 255 = Not Active)

# Exit Step (T, 84, 0x54)
Description: Exits the specified step without advancing to the next step
Command Code: T (ASCII), 84 (Decimal), 0x54 (Hex)
Command Index: Brew Step
  0: Fill
  1: Delay
  2: Preheat
  3: Grain In
  4: Refill
  5: Dough In
  6: Acid
  7: Protein
  8: Sacch
  9: Sacch2
  10: Mash Out
  11: Mash Hold
  12: Sparge
  13: Boil
  14: Chill
Response Code: n (ASCII), 111 (Decimal), 0x6E (Hex)
Response Parameters:
  Fill (Active Program ID or 255 = Not Active)
  Delay (Active Program ID or 255 = Not Active)
  Preheat (Active Program ID or 255 = Not Active)
  Grain In (Active Program ID or 255 = Not Active)
  Refill (Active Program ID or 255 = Not Active)
  Dough In (Active Program ID or 255 = Not Active)
  Acid (Active Program ID or 255 = Not Active)
  Protein (Active Program ID or 255 = Not Active)
  Sacch (Active Program ID or 255 = Not Active)
  Sacch2 (Active Program ID or 255 = Not Active)
  Mash Out (Active Program ID or 255 = Not Active)
  Mash Hold (Active Program ID or 255 = Not Active)
  Sparge (Active Program ID or 255 = Not Active)
  Boil (Active Program ID or 255 = Not Active)
  Chill (Active Program ID or 255 = Not Active)

# Start Step (U, 85, 0x55)
Description: Starts the specified step with the specified program number
Command Code: U (ASCII), 85 (Decimal), 0x55 (Hex)
Command Index: Brew Step
  0: Fill
  1: Delay
  2: Preheat
  3: Grain In
  4: Refill
  5: Dough In
  6: Acid
  7: Protein
  8: Sacch
  9: Sacch2
  10: Mash Out
  11: Mash Hold
  12: Sparge
  13: Boil
  14: Chill
Command Parameters:
Program ID (0-19)
Response Code: n (ASCII), 111 (Decimal), 0x6E (Hex)
Response Parameters:
  Fill (Active Program ID or 255 = Not Active)
  Delay (Active Program ID or 255 = Not Active)
  Preheat (Active Program ID or 255 = Not Active)
  Grain In (Active Program ID or 255 = Not Active)
  Refill (Active Program ID or 255 = Not Active)
  Dough In (Active Program ID or 255 = Not Active)
  Acid (Active Program ID or 255 = Not Active)
  Protein (Active Program ID or 255 = Not Active)
  Sacch (Active Program ID or 255 = Not Active)
  Sacch2 (Active Program ID or 255 = Not Active)
  Mash Out (Active Program ID or 255 = Not Active)
  Mash Hold (Active Program ID or 255 = Not Active)
  Sparge (Active Program ID or 255 = Not Active)
  Boil (Active Program ID or 255 = Not Active)
  Chill (Active Program ID or 255 = Not Active)

# Set Alarm Status (V, 86, 0x56)
Description: Sets the alarm status
Command Code: V (ASCII), 86(Decimal), 0x56(Hex)
Command Index: N/A
Command Parameters:
  Status (0=Off, 1=On)
Response Code:
  e (ASCII), 101(Decimal), 0x65(Hex)
Response Parameters:
  Status (0=Off, 1=On)

## Set Setpoint (X, 88, 0x58)
Description: Sets the setpoint of the specified Vessel (BrewTroller) or Zone (FermTroller)
Command Code: X (ASCII), 88 (Decimal), 0x58 (Hex)
Command Index: Vessel (0=HLT, 1=Mash, 2=Kettle) / Zone (0 = Zone 1, 1 = Zone 2, …)
Command Parameters:
Setpoint (C/F)
Response Code: t
Response Parameters:
Setpoint (C/F)

# Get Status (a, 97, 0x61)
Description: Enables/disables the specified valve profiles
Command Code: a (ASCII), 97 (Decimal), 0x61 (Hex)
Command Index: N/A
Command Parameters: N/A
Response Code: a (ASCII), 97 (Decimal), 0x61 (Hex)
Response Parameters:
  0 Alarm Status
  1 AutoValve Status Bitmask
    1: Auto Fill
    2: Auto Mash
    4: Auto Sparge [Not Implemented]
    8: Auto Chill
  2 Active Valve Profiles Bitmask
    1: Fill HLT
    2: Fill Mash
    4: Add Grain
    8: Mash Heat
    16: Mash Idle
    32: Sparge In
    64: Sparge Out
    128: Boil Additions
    256: Kettle Lid
    512: Chiller H2O
    1024: Chiller Beer
    2048: Boil Recirc
    4096: Drain
    8192: HLT Heat
    16384: HLT Idle
    32768: Kettle Heat
    65536: Kettle Idle
    131072: User 1
    262144: User 2
    524288: User 3
  3 Active Valve Outputs Bitmask
  HLT Setpoint
  HLT Temperature
  HLT Heat Power
  HLT Target Volume
  HLT Volume
  HLT Flowrate
  Mash Setpoint
  Mash Temperature
  Mash Heat Power
  Mash Target Volume
  Mash Volume
  Mash Flowrate
  Kettle Setpoint
  Kettle Temperature
  Kettle Heat Power
  Kettle Target Volume
  Kettle Volume
  Kettle Flowrate
  Mash Timer Value
  Mash Timer Status
  Boil Timer Value
  Boil Timer Status
  Boil Control State
  Kettle Off (0)
  Auto Boil (1)
  Manual Boil (2)
  Mash Zone Active Program Step
  Fill (0)
  Delay (1)
  Preheat (2)
  Grain In (3)
  Refill (4)
  Dough In (5)
  Acid (6)
  Protein (7)
  Sacch (8)
  Sacch2 (9)
  Mash Out (10)
  Mash Hold (11)
  Sparge (12)
  Idle (255)
  Mash Zone Active Program Recipe (0-19, 255 = Idle)
  Boil Zone Active Program Step
  Boil (13)
  Chill (14)
  Idle (255)
  Boil Zone Active Program Recipe (0-19, 255 = Idle)

# Get Alarm Status (e, 101, 0x65)
Description: Indicates the current alarm state
Command Code: e (ASCII), 101 (Decimal), 0x65 (Hex)
Command Index: N/A
Command Parameters:
Value (0=Off, 1=On)
Response Code: e (ASCII), 101 (Decimal), 0x65 (Hex)
Response Parameters:
Value (0=Off, 1=On)

# Reset (c, 99, 0x63)
Description: Performs the specified level of reset
Command Code: c (ASCII), 99 (Decimal), 0x63 (Hex)
Command Index: Reset Level
0: Reset Programs, Setpoints and Outputs
1: Perform a Soft Reboot
Command Parameters: N/A
Response Code: c (ASCII), 99 (Decimal), 0x63 (Hex)
Note: Command code c1 (Soft Reboot) will not return a response
Response Parameters: N/A

# Get Active Programs (n, 110, 0x6E)

Get Timer Status (o, 111, 0x6F)
Description: Indicates the remaining timer value in milliseconds
Command Code: o (ASCII), 111 (Decimal), 0x6F (Hex)
Command Index: Timer ID (0=Mash, 1=Boil)
Command parameters: N/A
Response Code: o (ASCII), 111 (Decimal), 0x6F (Hex)
Response Parameters:
Timer Value (Time remaining in ms)
Timer Status (0=Stopped, 1=Running)