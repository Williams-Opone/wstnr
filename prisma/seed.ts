const SEED_PRODUCTS = [
    {
      id: "p1",
      serial: "WST-01-SH",
      name: "STATIC TEE",
      price: 48.00,
      category: "shirts",
      composition: "460GSM RAW DENSE CANVAS // 100% ORGANIC COTTON SHED",
      details: "Heavily customized architecture. Oversized drop-shoulder block pattern featuring deconstructed exposed hem panel styling and signature stone-wash vintage texturing.",
      measurements: "S: 70cm L x 60cm W | M: 72cm L x 64cm W | L: 74cm L x 68cm W",
      colors: ["RAW CHARCOAL", "PITCH BLACK", "CONCRETE GREY"],
      sizes: ["S", "M", "L"],
      images: [
        "https://images.unsplash.com/photo-1780566035913-9233ca20dc29?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1780566035913-9233ca20dc29?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1780566035913-9233ca20dc29?auto=format&fit=crop&w=600&q=80"
      ]
    },
    {
      id: "p2",
      serial: "WST-02-SH",
      name: "STATIC TEE (ALT)",
      price: 48.00,
      category: "shirts",
      composition: "460GSM REINFORCED DRILL // 100% COMBED KNIT",
      details: "Alternative cut with raw shoulder line seams and heavy-duty structural layout.",
      measurements: "S: 69cm L x 58cm W | M: 71cm L x 62cm W | L: 73cm L x 66cm W",
      colors: ["CONCRETE GREY", "PITCH BLACK"],
      sizes: ["S", "M", "L"],
      images: [
        "https://images.unsplash.com/photo-1780566035913-9233ca20dc29?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1780566035913-9233ca20dc29?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1780566035913-9233ca20dc29?auto=format&fit=crop&w=600&q=80"
      ]
    },
    {
      id: "p3",
      serial: "WST-01-SK",
      name: "NOIR SKULLIE",
      price: 32.00,
      category: "skullies",
      composition: "MICRO-RIBBED SYNTH STRUCT // HIGH TENSION RETENTION",
      details: "Tonal weave crown framing geometry designed to map cleanly without structural sagging. Multi-density stretch knit compression.",
      measurements: "ONE SIZE FRAME DEVIATION",
      colors: ["PITCH BLACK", "ASH FLINT"],
      sizes: ["ONE SIZE"],
      images: [
        "https://images.unsplash.com/photo-1664289321749-07316ab5e374?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1664289321749-07316ab5e374?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1664289321749-07316ab5e374?auto=format&fit=crop&w=600&q=80"
      ]
    },
    {
      id: "p4",
      serial: "WST-03-SH",
      name: "CONCRETE RE-LS",
      price: 55.00,
      category: "shirts",
      composition: "HEAVY-GAUGE THERMAL KNIT",
      details: "Asymmetric stitch sleeves, raw neckband architecture, built for layering patterns.",
      measurements: "S: 71cm L x 58cm W | M: 73cm L x 61cm W | L: 75cm L x 64cm W",
      colors: ["PITCH BLACK", "CONCRETE GREY"],
      sizes: ["S", "M", "L"],
      images: [
        "https://images.unsplash.com/photo-1780566035913-9233ca20dc29?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1780566035913-9233ca20dc29?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1780566035913-9233ca20dc29?auto=format&fit=crop&w=600&q=80"
      ]
    },
    {
      id: "p5",
      serial: "WST-02-SK",
      name: "NOIR SKULLIE (ALT)",
      price: 32.00,
      category: "skullies",
      composition: "MICRO-RIBBED SYNTH CROWN",
      details: "Standard low-profile fit waffle watch cap construction.",
      measurements: "ONE SIZE FRAME DEVIATION",
      colors: ["PITCH BLACK", "OFF WHITE"],
      sizes: ["ONE SIZE"],
      images: [
        "https://images.unsplash.com/photo-1664289321749-07316ab5e374?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1664289321749-07316ab5e374?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1664289321749-07316ab5e374?auto=format&fit=crop&w=600&q=80"
      ]
    },
    {
      id: "p6",
      serial: "WST-04-SH",
      name: "SIGNAL TEE",
      price: 48.00,
      category: "shirts",
      composition: "COMBED INDUSTRIAL COTTON",
      details: "Stark heavy visual graphic profile printed with premium water-based discharge inks.",
      measurements: "S: 70cm L x 60cm W | M: 72cm L x 64cm W | L: 74cm L x 68cm W",
      colors: ["RAW CHARCOAL", "PITCH BLACK"],
      sizes: ["S", "M", "L"],
      images: [
        "https://images.unsplash.com/photo-1780566035913-9233ca20dc29?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1780566035913-9233ca20dc29?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1780566035913-9233ca20dc29?auto=format&fit=crop&w=600&q=80"
      ]
    },
    {
      id: "p7",
      serial: "WST-01-BN",
      name: "DUSK BEANIE",
      price: 34.00,
      category: "beanies",
      composition: "100% MERINO THERMAL LOOM",
      details: "High insulation luxury wool weave with classic fold fold-over cuff mapping.",
      measurements: "ONE SIZE FRAME DEVIATION",
      colors: ["DUSK BLACK", "SAND GRAVEL"],
      sizes: ["ONE SIZE"],
      images: [
        "https://images.unsplash.com/photo-1664289321749-07316ab5e374?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1664289321749-07316ab5e374?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1664289321749-07316ab5e374?auto=format&fit=crop&w=600&q=80"
      ]
    },
    {
      id: "p8",
      serial: "WST-03-SK",
      name: "BONE SKULLIE",
      price: 32.00,
      category: "skullies",
      composition: "MICRO-RIBBED SYNTH CROWN",
      details: "Bone-white tight knit structural head armor.",
      measurements: "ONE SIZE FRAME DEVIATION",
      colors: ["BONE WHITE", "PITCH BLACK"],
      sizes: ["ONE SIZE"],
      images: [
        "https://images.unsplash.com/photo-1664289321749-07316ab5e374?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1664289321749-07316ab5e374?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1664289321749-07316ab5e374?auto=format&fit=crop&w=600&q=80"
      ]
    },
    {
      id: "p9",
      serial: "WST-02-BN",
      name: "DUSK BEANIE (ALT)",
      price: 34.00,
      category: "beanies",
      composition: "100% MERINO THERMAL LOOM",
      details: "Alternative stitch profile watch cap crafted from dense knit premium wool.",
      measurements: "ONE SIZE FRAME DEVIATION",
      colors: ["DUSK BLACK", "SAND GRAVEL"],
      sizes: ["ONE SIZE"],
      images: [
        "https://images.unsplash.com/photo-1664289321749-07316ab5e374?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1664289321749-07316ab5e374?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1664289321749-07316ab5e374?auto=format&fit=crop&w=600&q=80"
      ]
    }
  ];