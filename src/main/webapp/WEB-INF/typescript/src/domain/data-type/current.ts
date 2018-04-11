export enum Current {
  TYPE = 0x0,                 // Hex for binary 0, it is a special case of fields that are always there
  MARKET = 0x0,               // Hex for binary 0, it is a special case of fields that are always there
  FROMSYMBOL = 0x0,           // Hex for binary 0, it is a special case of fields that are always there
  TOSYMBOL = 0x0,             // Hex for binary 0, it is a special case of fields that are always there
  FLAGS = 0x0,                // Hex for binary 0, it is a special case of fields that are always there
  PRICE = 0x1,                // Hex for binary 1
  BID = 0x2,                  // Hex for binary 10
  OFFER = 0x4,                // Hex for binary 100
  LASTUPDATE = 0x8,           // Hex for binary 1000
  AVG = 0x10,                 // Hex for binary 10000
  LASTVOLUME = 0x20,          // Hex for binary 100000
  LASTVOLUMETO = 0x40,        // Hex for binary 1000000
  LASTTRADEID = 0x80,         // Hex for binary 10000000
  VOLUMEHOUR = 0x100,         // Hex for binary 100000000
  VOLUMEHOURTO = 0x200,       // Hex for binary 1000000000
  VOLUME24HOUR = 0x400,       // Hex for binary 10000000000
  VOLUME24HOURTO = 0x800,     // Hex for binary 100000000000
  OPENHOUR = 0x1000,          // Hex for binary 1000000000000
  HIGHHOUR = 0x2000,          // Hex for binary 10000000000000
  LOWHOUR = 0x4000,           // Hex for binary 100000000000000
  OPEN24HOUR = 0x8000,        // Hex for binary 1000000000000000
  HIGH24HOUR = 0x10000,       // Hex for binary 10000000000000000
  LOW24HOUR = 0x20000,        // Hex for binary 100000000000000000
  LASTMARKET = 0x40000        // Hex for binary 1000000000000000000, this is a special case and will only appear on CCCAGG messages
}
