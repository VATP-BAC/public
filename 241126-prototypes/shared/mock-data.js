/* Shared mock dataset for all three UI directions.
   Same numbers everywhere so the team compares UX, not content. */
(function () {
  const hours = Array.from({ length: 24 }, (_, i) => i);

  // 24h electrical load (kW) — actual up to "now" (14:00), forecast for the full day.
  const forecast = [62, 58, 55, 54, 56, 64, 88, 118, 136, 141, 139, 134, 128, 131, 137, 140, 132, 118, 101, 92, 84, 76, 70, 65];
  const actual = [60, 57, 53, 52, 55, 61, 84, 112, 129, 142, 136, 127, 121, 124, 129];

  // Day-ahead spot price (€/MWh)
  const price = [71, 66, 63, 61, 64, 79, 104, 128, 121, 98, 86, 80, 77, 74, 79, 92, 117, 139, 131, 108, 94, 86, 79, 74];

  // 7 x 24 consumption heatmap (kWh), Mon..Sun
  const heat = Array.from({ length: 7 }, (_, d) =>
    hours.map((h) => {
      const work = d < 5 ? 1 : 0.55;
      const shape = h < 6 ? 0.4 : h < 9 ? 0.9 : h < 17 ? 1 : h < 21 ? 0.7 : 0.45;
      return Math.round((38 + 70 * shape * work + ((d * 7 + h * 3) % 11)) * 10) / 10;
    })
  );

  window.VATP = {
    site: { name: 'VATP Campus', city: 'Ventspils', org: 'Ventspils Augsto Tehnoloģiju Parks' },
    user: { name: 'Elīna Bērziņa', initials: 'EB', role: 'Energy manager' },
    now: '14:00',
    weather: { temp: 6.4, desc: 'Overcast, wind 8 m/s SW' },

    kpis: {
      energyToday: { value: 1284, unit: 'kWh', delta: -8.2, label: 'Energy today' },
      peakLoad: { value: 142, unit: 'kW', delta: 3.1, label: 'Peak load' },
      cop: { value: 4.1, unit: '', delta: 0.3, label: 'Heat pump COP' },
      cost: { value: 186, unit: '€', delta: -11.4, label: 'Cost today' },
      price: { value: 79, unit: '€/MWh', delta: 6.8, label: 'Spot price now' },
      indoor: { value: 21.4, unit: '°C', delta: 0.2, label: 'Avg indoor' },
      co2: { value: 640, unit: 'ppm', delta: -4.0, label: 'Avg CO₂' },
      carbon: { value: 0.21, unit: 't CO₂e', delta: -9.5, label: 'Carbon today' },
      comfort: { value: 87, unit: '/100', delta: 2, label: 'Comfort score' },
      devicesOnline: { value: 212, total: 218, label: 'Devices online' },
    },

    series: { hours, forecast, actual, price, heat },

    // last 7 days (kWh / €)
    week: {
      days: ['Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue'],
      energy: [1410, 1388, 902, 846, 1452, 1398, 1284],
      cost: [214, 209, 121, 112, 226, 205, 186],
      goal: 9000,
    },

    // Energy distribution — sources → uses (kWh today). Keep this concept in every direction.
    distribution: {
      sources: [
        { id: 'grid', label: 'Grid', value: 712 },
        { id: 'pv', label: 'Solar PV', value: 168 },
        { id: 'geo', label: 'Geothermal (via heat pump)', value: 404 },
      ],
      uses: [
        { id: 'heating', label: 'Space heating', value: 538 },
        { id: 'dhw', label: 'Hot water (DHW)', value: 142 },
        { id: 'vent', label: 'Ventilation (AHU)', value: 231 },
        { id: 'light', label: 'Lighting & plugs', value: 296 },
        { id: 'cool', label: 'Server cooling', value: 77 },
      ],
      // flows source→use (kWh)
      flows: [
        ['grid', 'vent', 231], ['grid', 'light', 216], ['grid', 'cool', 77], ['grid', 'heating', 120], ['grid', 'dhw', 68],
        ['pv', 'light', 80], ['pv', 'heating', 88],
        ['geo', 'heating', 330], ['geo', 'dhw', 74],
      ],
    },

    buildings: [
      { id: 'b1', name: 'Innovation Centre', short: 'IC', floors: 4, area: 6200, kwh: 512, comfort: 91, temp: 21.6, co2: 610, alerts: 1, gx: 1, gy: 1, h: 4 },
      { id: 'b2', name: 'Business Incubator', short: 'BI', floors: 3, area: 4100, kwh: 298, comfort: 84, temp: 20.9, co2: 720, alerts: 2, gx: 3, gy: 0, h: 3 },
      { id: 'b3', name: 'Production Hall', short: 'PH', floors: 1, area: 5400, kwh: 341, comfort: 78, temp: 18.7, co2: 540, alerts: 1, gx: 3, gy: 2, h: 2 },
      { id: 'b4', name: 'Electronics Lab', short: 'EL', floors: 2, area: 2300, kwh: 133, comfort: 93, temp: 21.9, co2: 580, alerts: 0, gx: 0, gy: 3, h: 2 },
    ],

    plant: [
      { id: 'geo', label: 'Geo drills', value: '8.2 °C', sub: 'brine in', state: 'ok' },
      { id: 'hp', label: 'Heat pump', value: 'COP 4.1', sub: '62 kW th', state: 'ok' },
      { id: 'buf', label: 'Buffer tank', value: '44.8 °C', sub: '1 500 L', state: 'ok' },
      { id: 'ahu', label: 'AHU-2', value: '3 200 m³/h', sub: 'supply 19 °C', state: 'warn' },
      { id: 'dhw', label: 'DHW tank', value: '57.3 °C', sub: 'legionella ok', state: 'ok' },
      { id: 'rad', label: 'Radiators', value: '41 °C', sub: 'flow', state: 'ok' },
      { id: 'fh', label: 'Floor heating', value: '33 °C', sub: 'flow', state: 'ok' },
    ],

    topConsumers: [
      { name: 'AHU-2 supply fan', building: 'Innovation Centre', kwh: 148, share: 11.5 },
      { name: 'Heat pump HP-1', building: 'Plant room', kwh: 132, share: 10.3 },
      { name: 'Server room CRAC', building: 'Innovation Centre', kwh: 77, share: 6.0 },
      { name: 'CNC line lighting', building: 'Production Hall', kwh: 64, share: 5.0 },
      { name: 'Clean room HVAC', building: 'Electronics Lab', kwh: 58, share: 4.5 },
    ],

    insights: [
      { tone: 'good', title: 'Heating used 8% less than last Tuesday', body: 'Milder night and the new night set-back in the Business Incubator saved about 42 kWh.' },
      { tone: 'warn', title: 'AHU-2 runs at full speed after hours', body: 'Fan ran at 100% from 19:00–23:00 yesterday with no occupancy. Scheduling it could save ~€9/day.' },
      { tone: 'info', title: 'Cheapest hours tonight: 01:00–05:00', body: 'Spot price drops to 61 €/MWh. Pre-heating DHW in this window is recommended.' },
    ],

    alerts: [
      { id: 'AL-1042', sev: 'critical', title: 'Supply air temperature too low', where: 'Business Incubator · AHU-2', device: 'AHU-2 supply sensor', value: '14.1 °C', expected: '≥ 17 °C', since: '13:42', age: '18 min', status: 'new', owner: null, bx: 'b2', suggestion: 'Check the heating coil valve. It reads 100% open but supply temperature is falling, which suggests a stuck actuator.' },
      { id: 'AL-1041', sev: 'warning', title: 'CO₂ above 1 000 ppm', where: 'Business Incubator · Floor 2 · Meeting room 2.04', device: 'CO₂ sensor R204', value: '1 180 ppm', expected: '< 1 000 ppm', since: '13:15', age: '45 min', status: 'new', owner: null, bx: 'b2', suggestion: 'Room is booked until 15:00 for 12 people. Raise the ventilation boost for this zone.' },
      { id: 'AL-1039', sev: 'warning', title: 'Meter offline', where: 'Production Hall · Sub-board DB-3', device: 'Energy meter M-317', value: 'no data', expected: 'reading every 1 min', since: '11:02', age: '3 h', status: 'ack', owner: 'Jānis K.', bx: 'b3', suggestion: 'Gateway GW-07 is online, so the Modbus line to M-317 is the likely cause.' },
      { id: 'AL-1036', sev: 'info', title: 'DHW legionella cycle due', where: 'Plant room · DHW tank', device: 'DHW controller', value: 'last 6 d ago', expected: 'weekly', since: '08:00', age: '6 h', status: 'watching', owner: 'Elīna B.', bx: 'b1', suggestion: 'Schedule the 65 °C cycle in tonight’s cheap window (01:00–05:00).' },
      { id: 'AL-1033', sev: 'warning', title: 'Heat pump short cycling', where: 'Plant room · HP-1', device: 'Heat pump HP-1', value: '7 starts/h', expected: '≤ 4 starts/h', since: 'Yesterday', age: '1 d', status: 'watching', owner: 'Jānis K.', bx: 'b1', suggestion: 'Buffer tank hysteresis is 2 K. Widening it to 4 K usually fixes short cycling.' },
      { id: 'AL-1029', sev: 'info', title: 'Window open with heating on', where: 'Electronics Lab · Floor 1 · Lab 1.12', device: 'Window contact W112', value: 'open 40 min', expected: 'closed', since: 'Yesterday', age: '1 d', status: 'resolved', owner: 'Auto', bx: 'b4', suggestion: 'Resolved automatically when the window closed.' },
      { id: 'AL-1027', sev: 'critical', title: 'Server room temperature high', where: 'Innovation Centre · Floor 0 · Server room', device: 'CRAC unit', value: '27.8 °C', expected: '< 26 °C', since: 'Mon', age: '1 d', status: 'resolved', owner: 'Elīna B.', bx: 'b1', suggestion: 'Filter replaced; temperature back to 22 °C.' },
    ],
  };

  // tiny formatting helpers shared by all directions
  window.fmt = {
    n(v, d = 0) { return Number(v).toLocaleString('en-GB', { minimumFractionDigits: d, maximumFractionDigits: d }).replace(/,/g, ' '); },
    delta(v, unit = '%') { const s = v > 0 ? '+' : v < 0 ? '−' : ''; return s + Math.abs(v) + unit; },
    h(i) { return String(i).padStart(2, '0') + ':00'; },
  };
})();
