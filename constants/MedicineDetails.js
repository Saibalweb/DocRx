const Frequency = [
    {label: '0-0-0', value: 0},
    {label: '1-0-0', value: 1},
    {label: '0-1-0', value: 2},
    {label: '0-0-1', value: 3},
    {label: '1-1-0', value: 4},
    {label: '1-0-1', value: 5},
    {label: '0-1-1', value: 6},
    {label: '1-1-1', value: 7},
    {label: '2-0-0', value: 8},
    {label: '0-2-0', value: 9},
    {label: '0-0-2', value: 10},
    {label: '2-1-0', value: 11},
    {label: '2-0-1', value: 12},
    {label: '0-2-1', value: 13},
    {label: '1-2-0', value: 14},
    {label: '1-0-2', value: 15},
    {label: '0-1-2', value: 16},
    {label: '2-2-0', value: 17},
    {label: '2-0-2', value: 18},
    {label: '0-2-2', value: 19},
    {label: '1-2-2', value: 20},
    {label: '2-1-1', value: 21},
    {label: '2-2-1', value: 22},
    {label: '1-1-2', value: 23},
    {label: '2-2-2', value: 24}
  ]
const Timing = [
    {label: 'a/m', value: 0},  
  {label: 'b/m', value: 1},  
  {label: 'a/f', value: 2}, 
  {label: 'b/f', value: 3}, 
  {label: 's/o', value: 4},  
  {label: 'h/s', value: 5},  
]
const Duration = [
    {label: 'continue', value: 0},      // Take continuously until advised otherwise
    {label: '1day', value: 1},         // For 1 day
    {label: '2days', value: 2},        // For 2 days
    {label: '3days', value: 3},        // For 3 days
    {label: '5days', value: 4},        // For 5 days
    {label: '1week', value: 5},        // For 1 week
    {label: '10days', value: 6},       // For 10 days
    {label: '2weeks', value: 7},       // For 2 weeks
    {label: '3weeks', value: 8},       // For 3 weeks
    {label: '1month', value: 9},       // For 1 month
    {label: '2months', value: 10},     // For 2 months
    {label: 'prn', value: 11},         // As needed (pro re nata in Latin)
    {label: 'stat', value: 12},        // Immediately (a single dose)
    {label: 'od', value: 13},          // Once daily (omni die in Latin, may also indicate indefinite duration)
    {label: 'bid', value: 14},         
    {label: 'tid', value: 15},        
    {label: 'hs', value: 16}   
  ]
  
export {Frequency,Timing,Duration};