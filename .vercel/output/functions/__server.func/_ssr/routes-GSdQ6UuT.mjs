import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Check, i as RotateCcw, r as Shuffle, t as X } from "../_libs/lucide-react.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-GSdQ6UuT.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var DECKS = [
	{
		id: "endocrine",
		lecture: 14,
		title: "Endocrine system",
		line: "Hormones, feedback, and glands"
	},
	{
		id: "blood",
		lecture: 15,
		title: "Blood",
		line: "Cells, clotting, and transfusion"
	},
	{
		id: "heart",
		lecture: 16,
		title: "Heart",
		line: "Chambers, valves, and the double pump"
	},
	{
		id: "vessels",
		lecture: 17,
		title: "Beat and vessels",
		line: "Rhythm, output, and circulation"
	},
	{
		id: "lymph",
		lecture: 18,
		title: "Lymph and immunity",
		line: "Fluid return and defense"
	}
];
function card(id, deck, prompt, choices, answer, explain) {
	return {
		id,
		deck,
		prompt,
		choices,
		answer,
		explain
	};
}
var bloodCards = [
	card("b01", "blood", "Blood is the body’s only fluid tissue. In these lectures it is classified as", [
		"Connective tissue",
		"Epithelial tissue lining the heart",
		"Nervous tissue",
		"A pure solution with no cells"
	], 0, "Cells are the formed elements, plasma is the ground substance, and proteins such as albumin and clotting proteins are the fibers of this connective tissue."),
	card("b02", "blood", "Which set matches the lecture’s description of whole blood?", [
		"About 8% of body weight, salty, pH 7.35–7.45, and about 100.4°F",
		"About 40% of body weight, strongly acidic, and colder than the body",
		"pH 6.5 and a temperature of 98.6°F exactly",
		"Only plasma, with no formed elements"
	], 0, "Salt keeps an isotonic environment for cells. The slight alkalinity is the 7.35–7.45 range. Friction of circulation makes blood warmer than ordinary body temperature."),
	card("b03", "blood", "The lecture’s split of whole blood is", [
		"Plasma about 55%, red cells about 45% (the hematocrit), and white cells plus platelets under 1%",
		"Red cells 55%, plasma 45%, platelets half of the volume",
		"White cells 45%, red cells 45%, plasma 10%",
		"Serum 90% and clot 10%"
	], 0, "The hematocrit is the red-cell percentage. The thin white-cell and platelet layer is the buffy coat, under 1%."),
	card("b04", "blood", "Plasma is mostly water plus dissolved substances. Which protein job is correct?", [
		"Albumin carries hydrophobic substances and holds water in the blood; clotting proteins help seal a vessel; antibodies defend",
		"Albumin is a nutrient protein burned for ATP",
		"Fibrinogen carries oxygen",
		"Globulins are the heme groups of red cells"
	], 0, "Plasma proteins stay in the bloodstream. They are not food proteins taken into cells for energy. Albumin also buffers pH. Globulins include antibodies and help move lipids."),
	card("b05", "blood", "All of the formed elements of blood are made in", [
		"Bone marrow, from rapidly dividing stem cells",
		"Lymph nodes only",
		"The spleen only, after birth",
		"The liver sinusoids, and nowhere else"
	], 0, "Red cells, white cells, and platelets all come from marrow. Platelets are fragments of megakaryocytes, not whole cells."),
	card("b06", "blood", "A red blood cell is built to carry oxygen. Which description matches the lecture?", [
		"Biconcave, no nucleus, no organelles, and essentially a bag of hemoglobin",
		"Round with a large nucleus and many mitochondria",
		"A fragment of a megakaryocyte",
		"A complete cell that uses aerobic respiration to burn the oxygen it carries"
	], 0, "The biconcave shape adds surface area and flexibility. No nucleus means no mitosis. No mitochondria means the cell does not use the oxygen it is transporting."),
	card("b07", "blood", "Hemoglobin in this lecture", [
		"Is an iron-containing protein; each red cell has about 250 million hemoglobin molecules and can bind about a billion oxygen molecules if hemoglobin is 12–18 g per 100 ml",
		"Is a plasma antibody",
		"Is made by platelets during a clot",
		"Carries only carbon dioxide and never oxygen"
	], 0, "Counts from the formed-element table: red cells are about 4–6 million per mm³ and their job is oxygen transport, plus help with carbon dioxide."),
	card("b08", "blood", "Anemia is", [
		"A decrease in the blood’s ability to carry oxygen, from too few red cells or too little hemoglobin",
		"Too many red cells and blood that is too thick",
		"A clot that breaks free and lodges in the brain",
		"A low platelet count with petechiae"
	], 0, "Two routes to the same problem: fewer cells, or cells with less hemoglobin. Sickle cell anemia is abnormally shaped hemoglobin."),
	card("b09", "blood", "Polycythemia is", [
		"Too many red cells, which thickens the blood and slows circulation",
		"Too few white cells after prednisone",
		"A genetic shortage of clotting factors",
		"Universal-donor blood"
	], 0, "The lecture lists three causes: bone marrow cancer, heart disease, and life at high altitude. Extra red cells raise viscosity."),
	card("b10", "blood", "Why did EPO blood doping increase aerobic performance in the lecture’s example?", [
		"More red cells carry more oxygen to cells, so more ATP can be made",
		"EPO destroys hemoglobin and forces anaerobic respiration",
		"EPO is a diuretic that lowers blood volume",
		"EPO turns type A blood into type O"
	], 0, "Erythropoietin, including the kidney’s own hormone, drives red-cell production. Artificially raising the count was the doping point."),
	card("b11", "blood", "White blood cells differ from red cells because they", [
		"Have a nucleus and organelles and are the only complete cells in the blood",
		"Have no nucleus, so they can carry more oxygen",
		"Are cell fragments used only for clotting",
		"Never leave the bloodstream"
	], 0, "They are sorted partly by nucleus shape. Their job is defense, not oxygen transport."),
	card("b12", "blood", "Diapedesis and chemotaxis mean", [
		"White cells leave vessels into tissue, and they move toward chemicals from damaged tissue",
		"Red cells divide inside a clot",
		"Platelets become hemoglobin",
		"Plasma proteins are eaten as nutrients"
	], 0, "A white cell uses blood as a ride, then leaves the vessel to fight in the tissue. Chemotaxis is how it finds the damage."),
	card("b13", "blood", "Match the white-cell counts.", [
		"Leukocytosis is a high count and usually means infection; leukopenia is a low count; leukemia is cancerous marrow pouring out immature white cells",
		"Leukopenia is a high count during a mild cold; leukemia is too few red cells",
		"Leukocytosis means the marrow has stopped",
		"All three terms mean a low platelet count"
	], 0, "Leukopenia is linked to drugs such as prednisone and anticancer agents, and also to a severe infection that pulls cells out faster than marrow replaces them."),
	card("b14", "blood", "Leukemia and lymphoma are told apart by", [
		"Leukemia can affect any marrow cell; lymphoma affects only lymphocytes and only in lymph nodes",
		"They are two names for the same cancer of red cells",
		"Lymphoma is a low platelet count; leukemia is a clot",
		"Leukemia never involves white cells"
	], 0, "Location and cell type are the lecture’s distinction. Leukemia fills the blood with immature white cells from cancerous marrow."),
	card("b15", "blood", "Granulocytes and agranulocytes are", [
		"Granulocytes have visible granules and lobed nuclei (neutrophils, eosinophils, basophils); agranulocytes do not show granules and include lymphocytes and monocytes",
		"Granulocytes are red cells; agranulocytes are platelets",
		"Both groups lack nuclei",
		"Agranulocytes are the only cells that carry oxygen"
	], 0, "The granule and nucleus rules are how the lecture sorts the five white-cell types."),
	card("b16", "blood", "From most abundant to least, white cells run", [
		"Neutrophils, lymphocytes, monocytes, eosinophils, basophils",
		"Basophils, eosinophils, monocytes, lymphocytes, neutrophils",
		"Lymphocytes, neutrophils, basophils, monocytes, eosinophils",
		"Monocytes, neutrophils, lymphocytes, basophils, eosinophils"
	], 0, "Never Let Monkeys Eat Bananas: neutrophils, lymphocytes, monocytes, eosinophils, basophils."),
	card("b17", "blood", "Neutrophils", [
		"Are the most numerous white cells, have a multilobed nucleus, and phagocytize bacteria and fungi at an active infection",
		"Kill parasites and drive allergic responses",
		"Become macrophages in chronic infection",
		"Make antibodies"
	], 0, "Their numbers rise in bacterial infection. They are the first of the “Never…” list."),
	card("b18", "blood", "Which white cell is associated with allergies?", [
		"Eosinophil",
		"Neutrophil",
		"Lymphocyte",
		"Megakaryocyte"
	], 0, "Eosinophils have a multilobed nucleus and brick-red granules. They kill parasites and take part in allergic responses."),
	card("b19", "blood", "Which white cell is associated with viral infection?", [
		"Lymphocyte",
		"Neutrophil",
		"Eosinophil",
		"Platelet"
	], 0, "Lymphocytes are the second most common white cell, with a large round nucleus. They live in blood and lymph nodes. Numbers rise, and sometimes later fall, in viral infection."),
	card("b20", "blood", "Which white cell is associated with bacterial infection?", [
		"Neutrophil",
		"Lymphocyte",
		"Basophil",
		"Eosinophil"
	], 0, "Neutrophils are the phagocytes at active bacterial and fungal sites. Lymphocytes are the viral-associated cells in this lecture’s matching set."),
	card("b21", "blood", "Which white cell is associated with chronic infection?", [
		"Monocyte",
		"Neutrophil",
		"Eosinophil",
		"Basophil"
	], 0, "Monocytes are the largest white cells, with a kidney-shaped nucleus. In tissues they become macrophages and matter most in chronic infection."),
	card("b22", "blood", "Which white cell mimics eosinophils and is the rarest?", [
		"Basophil",
		"Neutrophil",
		"Lymphocyte",
		"Monocyte"
	], 0, "Basophils are the rarest white cells. The lecture says they mimic eosinophil behavior."),
	card("b23", "blood", "Lymphocytes include", [
		"B cells that make antibodies, T cells that kill infected cells, and NK cells that kill suspicious cells",
		"Only neutrophils that eat bacteria",
		"Platelets and red cells",
		"Cells with no nucleus"
	], 0, "That is the lecture’s long-term immune roster. Lymphocytes are agranulocytes and the detecting cells of lymph nodes as well."),
	card("b24", "blood", "Platelets are", [
		"Fragments of megakaryocytes, needed for hemostasis",
		"Whole cells with a nucleus that carry oxygen",
		"Plasma proteins that never leave the liver",
		"The same as fibrin"
	], 0, "The count in the table is about 250,000–400,000 per mm³. Their job is clotting, not immunity or oxygen transport."),
	card("b25", "blood", "The three phases of hemostasis, in order, are", [
		"Vascular spasm, platelet plug, coagulation",
		"Coagulation, spasm, then diapedesis",
		"Agglutination, diapedesis, chemotaxis",
		"Fibrinolysis, then thrombus, then embolus"
	], 0, "Spasm narrows the vessel immediately. Platelets then stick and call more platelets. Coagulation builds the fibrin clot."),
	card("b26", "blood", "During coagulation", [
		"Clotting factors, tissue chemicals, and calcium form thrombin, which turns fibrinogen into insoluble fibrin",
		"Hemoglobin becomes a platelet plug with no proteins involved",
		"Albumin forms the mesh that traps red cells",
		"The vessel dilates to increase blood loss"
	], 0, "Fibrin is the hair-like mesh. It traps red cells and platelets. A typical clot forms in 3 to 6 minutes and is removed after the wall heals."),
	card("b27", "blood", "A thrombus and an embolus differ because", [
		"A thrombus is a clot in an unbroken vessel; an embolus is that clot after it breaks free and floats",
		"A thrombus is too few platelets; an embolus is too many red cells",
		"Both words mean a low clotting-factor disease",
		"An embolus stays where it formed and never moves"
	], 0, "A thrombus can be deadly in the lungs. An embolus can later jam a critical vessel, including one in the brain."),
	card("b28", "blood", "Thrombocytopenia and hemophilia are both “not enough clotting,” but", [
		"Thrombocytopenia is too few platelets and can show as petechiae; hemophilia is too few clotting proteins and is genetic",
		"Both are too many red cells",
		"Hemophilia is a high white-cell count; thrombocytopenia is diabetes",
		"Both are treated by blocking prostaglandins only"
	], 0, "With too few platelets, ordinary movement can bleed tiny vessels. With hemophilia, minor tissue damage can bleed for a dangerously long time."),
	card("b29", "blood", "Blood loss in this lecture", [
		"Causes weakness after about 15–30% is lost, and shock that can be fatal after more than 30%",
		"Is harmless until 70% is gone",
		"Only matters if the lost blood is type AB",
		"Is replaced by platelets alone, with no transfusion"
	], 0, "Transfusions replace cells after hemorrhage, anemia, leukopenia from cancer treatment, or thrombocytopenia."),
	card("b30", "blood", "ABO type is determined by", [
		"Whether the A antigen, the B antigen, both, or neither is on the red cells",
		"Only the Rh antigen",
		"The number of platelets",
		"Which white cell is most numerous"
	], 0, "Both antigens: type AB. Only A: type A. Only B: type B. Neither: type O. Antibodies in typing serum make matching cells clump."),
	card("b31", "blood", "A person who is Rh-negative receives Rh-positive blood. What happens next, according to the lecture?", [
		"The immune system becomes sensitized and makes anti-Rh antibodies; later Rh-positive transfusions are attacked",
		"Nothing, because Rh-negative people can always receive Rh-positive blood",
		"The donor blood loses its antigens immediately",
		"The recipient permanently becomes type AB"
	], 0, "Most Americans are Rh-positive and already carry the antigen. An Rh-negative person does not, until exposure teaches the immune system to attack it."),
	card("b32", "blood", "Hemolytic disease of the newborn in this lecture is a risk when", [
		"The mother is Rh-negative and the child inherits Rh-positive blood; later pregnancies face antibodies the mother made after the first",
		"The mother is Rh-positive and the child is Rh-negative",
		"Both mother and child are type O",
		"The father lacks every ABO antigen"
	], 0, "RhoGAM can block the buildup of anti-Rh antibodies. ABO mismatch does not hit this hard in the lecture’s account."),
	card("b33", "blood", "Red cells carry A antigens and Rh antigens, and no B antigens. The type is", [
		"A positive",
		"A negative",
		"B positive",
		"O negative"
	], 0, "A antigen means group A. Rh antigen means positive. No B antigen, so it is not AB or B."),
	card("b34", "blood", "Red cells carry only B antigens. The type is", [
		"B negative",
		"B positive",
		"AB positive",
		"O positive"
	], 0, "B antigens without A means group B. No Rh antigen means negative."),
	card("b35", "blood", "Red cells carry Rh antigens and neither A nor B. The type is", [
		"O positive",
		"O negative",
		"AB negative",
		"A positive"
	], 0, "No A and no B is group O. The Rh antigen makes it positive."),
	card("b36", "blood", "Red cells carry A, B, and Rh antigens. The type is", [
		"AB positive",
		"AB negative",
		"O positive",
		"A positive"
	], 0, "Both ABO antigens make AB. Rh makes it positive. AB positive is the universal recipient."),
	card("b37", "blood", "Which statement about transfusion matches the lecture?", [
		"AB positive is the universal recipient; O negative is the universal donor",
		"O positive is the universal recipient; AB negative is the universal donor",
		"Type A can receive B and AB",
		"Rh-negative blood can safely receive Rh-positive blood"
	], 0, "A recipient can take donor cells only if those cells do not carry an antigen the recipient lacks. AB positive already has A, B, and Rh. O negative has none of them to give."),
	card("b38", "blood", "Which blood types can a B-positive patient receive?", [
		"B positive, B negative, O positive, and O negative",
		"Only B positive",
		"A positive, A negative, and AB positive",
		"Every type, including A and AB"
	], 0, "B positive already recognizes B and Rh as self, and recognizes the lack of antigens on O. It does not recognize A, so A and AB are unsafe."),
	card("b39", "blood", "Which blood types can an A-negative patient receive?", [
		"A negative and O negative",
		"A positive, A negative, O positive, and O negative",
		"B negative and O negative",
		"AB negative only"
	], 0, "A negative recognizes A, and recognizes O. It does not recognize B, and it must not receive the Rh antigen."),
	card("b40", "blood", "To which patients can AB-positive blood be donated?", [
		"AB positive only",
		"Every ABO and Rh type",
		"AB positive and AB negative",
		"O negative and AB positive"
	], 0, "AB positive cells carry A, B, and Rh. Only a recipient who already has all three can take them. O negative is the donor that can go to everyone, not AB positive."),
	card("b41", "blood", "To which patients can O-negative blood be donated?", [
		"All eight ABO and Rh types",
		"O negative only",
		"Only Rh-negative patients",
		"Only type O patients"
	], 0, "O negative has no A, no B, and no Rh antigen, so it brings nothing a recipient would see as foreign. That is why it is the universal donor."),
	card("b42", "blood", "A sample clumps in anti-A serum and does not clump in anti-B serum. The ABO type is", [
		"Type A",
		"Type B",
		"Type AB",
		"Type O"
	], 0, "Agglutination means the antibodies found their antigen. Anti-A bound A. Anti-B found nothing. Type O clumps with neither serum; type AB clumps with both."),
	card("b43", "blood", "You are born with antibodies against", [
		"The ABO antigens you do not have on your own red cells",
		"Every antigen you carry, including your own",
		"Only Rh, never A or B",
		"Platelets, but never red-cell antigens"
	], 0, "A safe transfusion gives the recipient only antigens it already treats as self. Anything extra is attacked, and the cells clump and rupture.")
];
var endocrineCards = [
	card("e01", "endocrine", "Compared with the nervous system, the endocrine system produces responses that are", [
		"Short-term and very specific, such as one muscle contraction",
		"Longer-term and more general, such as puberty",
		"Limited to ducts that open onto a surface",
		"Electrical signals that never enter the blood"
	], 1, "The nervous system is fast and specific. The endocrine system is the slower control system and its effects, like growth at puberty, last longer and are broader."),
	card("e02", "endocrine", "A hormone is", [
		"A chemical messenger released into the blood by a gland",
		"An electrical impulse stored in the posterior pituitary",
		"A duct secretion such as sweat or saliva",
		"A nutrient protein taken up by cells for energy"
	], 0, "Hormones are chemical messengers. Glands release them into the blood, and they travel until they find a target."),
	card("e03", "endocrine", "These lectures say hormones help control all of the following except", [
		"Reproduction",
		"Growth and development",
		"Metabolism and homeostasis",
		"The speed of a single skeletal-muscle action potential"
	], 3, "The overview lists reproduction, growth and development, metabolism, and homeostasis. A single action potential is nervous-system timing, not a hormone effect."),
	card("e04", "endocrine", "Which sequence matches hormone physiology?", [
		"Secreted into the blood, travels to a target, binds receptors, and the cell changes",
		"Secreted through a duct onto one surface and never binds a receptor",
		"Made by the target, then destroyed before it can bind",
		"Stored in bone and released only by a motor nerve"
	], 0, "A gland secretes the hormone into the bloodstream. It reaches a target, binds receptors on the plasma membrane, and that binding changes the cell. The change depends on which hormone bound."),
	card("e05", "endocrine", "A cell is a hormone’s target only if it", [
		"Has receptor proteins that hormone can bind",
		"Sits next to the gland that made the hormone",
		"Lacks a plasma membrane",
		"Is an exocrine duct"
	], 0, "Targets have receptors the hormone can “unlock.” The hormone still travels through the blood until it finds those cells."),
	card("e06", "endocrine", "Which pairing is correct?", [
		"Exocrine glands use a duct to a specific place; endocrine glands secrete hormones into the blood",
		"Exocrine glands secrete into the blood; endocrine glands always use a duct",
		"Sweat glands are endocrine; the thyroid is exocrine",
		"Both types can act only on cells that touch the gland"
	], 0, "Sweat glands, salivary glands, and the digestive pancreas are exocrine. The thyroid, adrenals, and endocrine pancreas release into the blood and can reach the whole body."),
	card("e07", "endocrine", "Steroid hormones are", [
		"Made from cholesterol, fat-soluble, and carried on plasma proteins in the blood",
		"Made from amino acids and able to travel freely because they dissolve in water",
		"The same molecules as prostaglandins",
		"Blocked directly by NSAIDs"
	], 0, "Steroids come from cholesterol. They are hydrophobic, so they need plasma proteins to travel in blood. Amino-acid derivatives are the water-soluble group."),
	card("e08", "endocrine", "Amino-acid derivative hormones are", [
		"Water-soluble and can travel in blood without a carrier protein",
		"Fat-soluble steroids that must bind a plasma protein",
		"Made from arachidonic acid in cell membranes",
		"Always the cause of chronic inflammation"
	], 0, "They are built from amino acids and are hydrophilic, so they move through blood on their own."),
	card("e09", "endocrine", "Prostaglandins", [
		"Come from arachidonic acid, cause pain and inflammation, and are blocked by NSAIDs",
		"Are cholesterol-based hormones stored in the pituitary",
		"Lower blood glucose the way insulin does",
		"Are released only by the pineal gland at night"
	], 0, "Prostaglandins are fatty-acid derivatives of membrane arachidonic acid. Early inflammation helps limit damage; chronic inflammation contributes to disease."),
	card("e10", "endocrine", "Hormone levels in the blood are kept mostly by negative feedback. A classroom example is", [
		"High blood sugar triggers insulin release until the level returns toward normal, then release stops",
		"High thyroid hormone makes the pituitary release more TSH without limit",
		"A hormone keeps rising no matter what the blood level is",
		"Positive feedback is the everyday control for most hormones"
	], 0, "A change away from normal triggers hormone release that pushes the body back. Release stops once an appropriate blood level is reached."),
	card("e11", "endocrine", "Which list matches the major endocrine organs in this unit?", [
		"Hypothalamus, pituitary, pineal, thyroid, parathyroids, thymus, adrenals, pancreas, and gonads",
		"Only sweat glands, salivary glands, and sebaceous glands",
		"Cervical, axillary, and inguinal lymph nodes",
		"SA node, AV node, and Purkinje fibers"
	], 0, "Those are the organs mapped in the lecture, from the brain’s control centers through the gonads."),
	card("e12", "endocrine", "Control-center glands differ from primary glands because they", [
		"Direct other glands. The hypothalamus and pituitary are the control centers",
		"Only secrete through ducts",
		"Have an endocrine role that is never their main job",
		"Make no hormones of their own"
	], 0, "Primary glands act on body cells. Secondary organs can release hormones, but endocrine work is not their main job. Kidneys, heart, and digestive organs are the secondary examples."),
	card("e13", "endocrine", "A hypothalamic releasing hormone", [
		"Controls the pituitary. TRH makes the pituitary release the hormone that acts on the thyroid",
		"Is stored in thyroid follicles and is the same molecule as T4",
		"Directly raises blood calcium by activating osteoclasts",
		"Is produced by pancreatic beta cells"
	], 0, "Releasing hormones run the pituitary. The hypothalamus also makes primary hormones, ADH and oxytocin, which affect the body and do not regulate the pituitary."),
	card("e14", "endocrine", "Which hormones are made by the hypothalamus, stored in the posterior pituitary, and act on the body rather than on the pituitary?", [
		"Antidiuretic hormone and oxytocin",
		"TSH and ACTH",
		"Insulin and glucagon",
		"T4 and calcitonin"
	], 0, "ADH and oxytocin are the hypothalamic primary hormones. The posterior lobe stores them; it does not make the anterior-lobe stimulating hormones."),
	card("e15", "endocrine", "Antidiuretic hormone (ADH)", [
		"Targets the kidneys and causes them to retain water",
		"Targets uterine smooth muscle and causes labor contractions",
		"Lowers blood glucose",
		"Is made in thyroid follicles and requires iodine"
	], 0, "ADH’s target is the kidney. Keeping water raises blood volume. Oxytocin is the hormone for uterine contraction and milk release."),
	card("e16", "endocrine", "Oxytocin", [
		"Targets uterine smooth muscle and mammary glands: labor contractions and milk release",
		"Causes the kidneys to retain water",
		"Stimulates the adrenal cortex to release cortisol",
		"Lowers blood calcium"
	], 0, "Oxytocin is produced in the hypothalamus and stored in the posterior pituitary. It does not regulate other pituitary hormones."),
	card("e17", "endocrine", "Which medication would you give a patient with water intoxication?", [
		"A diuretic",
		"An antidiuretic",
		"Extra ADH",
		"Calcitonin"
	], 0, "The patient already has too much water. A diuretic makes the kidneys lose water. An antidiuretic would retain still more."),
	card("e18", "endocrine", "Which medication would you give a patient in shock from dangerously low blood pressure?", [
		"An antidiuretic",
		"A diuretic",
		"A drug that blocks all water retention",
		"Insulin"
	], 0, "Shock here means pressure is too low. Retaining water supports blood volume. A diuretic would drop volume further."),
	card("e19", "endocrine", "Which medication would you give a patient with pulmonary edema?", [
		"A diuretic",
		"An antidiuretic",
		"Extra ADH",
		"Growth hormone"
	], 0, "Fluid in the lungs needs to come off. A diuretic increases water loss. Retaining water would worsen the edema."),
	card("e20", "endocrine", "The pituitary is connected to the hypothalamus by the", [
		"Infundibulum, with many blood vessels for communication",
		"Coronary sulcus",
		"Cribriform plate of the ethmoid",
		"Thoracic duct"
	], 0, "The infundibulum is the stalk. The gland itself sits in the sella turcica of the sphenoid bone."),
	card("e21", "endocrine", "What skull structure protects the pituitary gland?", [
		"The sella turcica of the sphenoid bone",
		"The cribriform plate of the ethmoid bone",
		"The sella turcica of the ethmoid bone",
		"The cribriform plate of the sphenoid bone"
	], 0, "The sella turcica is the saddle of the sphenoid. The cribriform plate is ethmoid bone and is not the pituitary’s bony box."),
	card("e22", "endocrine", "Which statement about the pituitary lobes is correct?", [
		"The anterior lobe is glandular epithelium and produces hormones; the posterior lobe is nervous tissue and stores hypothalamic hormones",
		"Both lobes only store hormones made in the thyroid",
		"The posterior lobe produces TSH, ACTH, FSH, and LH",
		"The anterior lobe stores ADH and oxytocin"
	], 0, "Anterior: makes hormones. Posterior: stores ADH and oxytocin. Together they link the hypothalamus to the rest of the endocrine system."),
	card("e23", "endocrine", "Which pituitary hormones act on the body and do not command another gland?", [
		"Growth hormone and prolactin",
		"TSH and ACTH",
		"FSH and LH",
		"TRH and thyroid hormone"
	], 0, "GH affects cell division and growth. Prolactin affects mammary tissue. FSH, LH, TSH, and ACTH are the four stimulating hormones that drive other glands."),
	card("e24", "endocrine", "Which stimulating hormone is paired with the right target?", [
		"ACTH acts on the adrenal cortex; TSH acts on the thyroid; FSH and LH act on the gonads",
		"TSH acts on the kidney; ACTH acts on the pancreas",
		"Prolactin stimulates the thyroid; GH stimulates the adrenal medulla",
		"FSH is stored in the posterior pituitary and targets the liver"
	], 0, "The chain is hypothalamus, then pituitary, then a primary gland. Stimulating hormones make those glands secrete their own hormones."),
	card("e25", "endocrine", "The thyroid axis runs in which order?", [
		"Hypothalamic TRH, then pituitary TSH, then thyroid T4, which raises metabolism in body cells",
		"Thyroid T4, then hypothalamic TSH, then pituitary TRH",
		"Pituitary TRH, then thyroid ACTH, then insulin",
		"Adrenal ACTH, then pineal melatonin, then T4"
	], 0, "TRH is the releasing hormone, TSH is the stimulating hormone, and T4 (thyroxine) is the thyroid hormone that reaches essentially all cells."),
	card("e26", "endocrine", "If the thyroid releases too much thyroid hormone, negative feedback will", [
		"Decrease pituitary TSH",
		"Increase pituitary TSH without limit",
		"Make the posterior pituitary secrete T4",
		"Raise blood calcium through PTH"
	], 0, "Too much T4 lowers TSH. Too little T4 raises TSH. The pituitary responds to the hormone of the gland it stimulates."),
	card("e27", "endocrine", "Cole has sudden weight gain, always feels cold, T4 of 2.0 µg/dl (low), and TSH of 7.1. This pattern is", [
		"Hypothyroidism: TSH is high because the pituitary is trying to drive a failing thyroid",
		"Hyperthyroidism: TSH should be high whenever T4 is high",
		"Type I diabetes from loss of beta cells",
		"Too much ADH, with no thyroid involved"
	], 0, "The lecture’s case is autoimmune destruction of the thyroid. Low T4 removes negative feedback, so TSH climbs. A value of 7 for TSH is treated as high here."),
	card("e28", "endocrine", "In hyperthyroidism, when too much thyroid hormone is produced, TSH is expected to be", [
		"Low, because extra T4 feeds back and cuts pituitary TSH",
		"High, moving in the same direction as T4",
		"Unchanged, because TSH ignores T4",
		"Made by the thyroid follicles themselves"
	], 0, "High thyroid hormone is the opposite of Cole’s labs. The pituitary backs off instead of stimulating harder."),
	card("e29", "endocrine", "Thyroid hormone (thyroxine, T4)", [
		"Targets essentially all cells, raises metabolism and ATP formation, and needs iodine to be made",
		"Lowers blood calcium by stimulating osteoclasts",
		"Is made by the parathyroid glands on the back of the thyroid",
		"Is stored in the posterior pituitary"
	], 0, "The gland is two lobes over the anterior trachea, joined by an isthmus. Follicles make the hormone. It is also needed for tissue growth and development."),
	card("e30", "endocrine", "Calcitonin", [
		"Targets osteoclasts, reduces their activity, and lowers blood calcium",
		"Raises blood calcium by activating osteoclasts",
		"Is secreted by pancreatic alpha cells",
		"Is the same hormone as parathyroid hormone"
	], 0, "Calcitonin comes from the thyroid and pulls calcium the opposite way from PTH."),
	card("e31", "endocrine", "Parathyroid hormone (PTH)", [
		"Targets osteoclasts and kidneys, pulls calcium from bone, and raises blood calcium",
		"Lowers blood calcium the way calcitonin does",
		"Is made inside thyroid follicles and requires iodine",
		"Lowers blood glucose"
	], 0, "The parathyroid glands sit on the posterior thyroid. Osteoclasts put calcium ions into the blood."),
	card("e32", "endocrine", "Which hormone does the opposite of parathyroid hormone?", [
		"Calcitonin from the thyroid gland",
		"Calcitriol from the skin",
		"Cholecalciferol from the gut",
		"Calcium from the kidneys"
	], 0, "PTH raises blood calcium. Calcitonin lowers it by quieting osteoclasts."),
	card("e33", "endocrine", "The thymus", [
		"Lies in the upper thorax behind the sternum, is largest in children, and helps make T cells through thymosin",
		"Is largest in older adults and makes insulin",
		"Sits in the sella turcica",
		"Filters lymph only in the inguinal region"
	], 0, "It shrinks through adulthood. Thymosin supports development of the immune system’s T cells."),
	card("e34", "endocrine", "The adrenal glands", [
		"Sit on top of the kidneys and take part in the stress response and water balance",
		"Are buried in the sella turcica",
		"Are the two lobes wrapped around the trachea",
		"Only secrete digestive enzymes"
	], 0, "Each adrenal has a cortex and a medulla. The cortex itself has outer, middle, and inner layers."),
	card("e35", "endocrine", "The adrenal medulla produces epinephrine, which", [
		"Constricts blood vessels and raises heart rate and respiration, increasing oxygen delivery",
		"Is a mineralocorticoid from the outer cortex",
		"Lowers blood sugar for storage",
		"Replaces insulin after a meal"
	], 0, "The medulla is the inner, nervous-tissue-related core. Epinephrine is the acute stress hormone in this lecture, separate from the cortex steroids."),
	card("e36", "endocrine", "Match the adrenal cortex layers.", [
		"Outer layer mineralocorticoids, middle layer glucocorticoids, inner layer androgens",
		"Outer layer insulin, middle layer glucagon, inner layer calcitonin",
		"The cortex makes only epinephrine",
		"Outer layer TSH, middle layer ACTH, inner layer GH"
	], 0, "Salt, sugar, then sex hormones, from outside in: mineralocorticoids, glucocorticoids, androgens."),
	card("e37", "endocrine", "Mineralocorticoids", [
		"Come from the outer adrenal cortex, act on the kidney, and regulate water and salt balance",
		"Suppress immunity the way prednisone does",
		"Are the main product of the adrenal medulla",
		"Are made by beta cells"
	], 0, "They manage the mineral, or salt, content of the blood. The kidney is the target organ."),
	card("e38", "endocrine", "Why do physicians often tell patients with high blood pressure to eat less salt?", [
		"Salt, like mineralocorticoids, increases blood volume",
		"Salt, like mineralocorticoids, decreases blood volume",
		"Salt does not change blood volume",
		"Salt destroys the adrenal medulla"
	], 0, "More salt in the blood holds more water, so volume and pressure rise. The lecture also notes that dietary salt can lower mineralocorticoid release by negative feedback, which is why some argue a low-salt diet matters less if the adrenals and kidneys are healthy."),
	card("e39", "endocrine", "Glucocorticoids from the middle adrenal cortex", [
		"Raise blood sugar and suppress the immune system. Prednisone mimics them, and ACTH triggers their release",
		"Lower blood sugar the way insulin does",
		"Are stored in the posterior pituitary",
		"Only affect the gonads"
	], 0, "Extra sugar supports fight or flight. Suppressing inflammation and immunity leaves more resources for that response. They are anti-inflammatory."),
	card("e40", "endocrine", "Androgens of the adrenal cortex", [
		"Are sex hormones from the inner cortex, made in small amounts through life, mostly androgens plus some estrogens",
		"Are the body’s only source of insulin",
		"Replace thyroid hormone if iodine is missing",
		"Are secreted by pancreatic alpha cells when sugar is low"
	], 0, "The inner cortical layer is the sex-hormone zone. The amounts are small compared with the gonads, but they are made across life."),
	card("e41", "endocrine", "The pancreas is both an endocrine and an exocrine gland. Which pairing is right?", [
		"Islets make hormones that hold blood sugar steady; lobules make digestive enzymes",
		"Islets make digestive enzymes; lobules make only insulin",
		"The whole pancreas is a control-center gland like the pituitary",
		"Alpha cells store ADH"
	], 0, "Endocrine work is the pancreatic islets. Exocrine work is the lobules and their digestive enzymes."),
	card("e42", "endocrine", "Glucagon is", [
		"Released by alpha cells when blood sugar is low, and it raises sugar by making the liver release glucose",
		"Released by beta cells when sugar is high",
		"A steroid from the outer adrenal cortex",
		"The same molecule as T4"
	], 0, "Glucagon is the raising hormone. Insulin is the lowering hormone. They come from different islet cells."),
	card("e43", "endocrine", "Insulin is", [
		"Released by beta cells when blood sugar is high, and it lowers sugar by moving glucose into cells",
		"Released by alpha cells when sugar is low",
		"Made in the posterior pituitary",
		"A prostaglandin blocked by NSAIDs"
	], 0, "High sugar is the signal for insulin. Without it, sugar stays in the blood and cells cannot take it up."),
	card("e44", "endocrine", "In diabetes, sugar cannot enter cells and remains in the blood. Which pairing matches the lecture?", [
		"Type I is autoimmune destruction of insulin-making beta cells; Type II is insulin resistance",
		"Type I is resistance; Type II is loss of alpha cells",
		"Both types are caused by too much calcitonin",
		"Diabetes means chronic low blood sugar from excess insulin only"
	], 0, "The shared problem is sugar stuck in the blood. The cause differs: missing insulin versus cells that no longer respond to it."),
	card("e45", "endocrine", "Testosterone, and estrogen with progesterone,", [
		"Support production of sperm or eggs and influence secondary sex characteristics",
		"Are stored in the posterior pituitary",
		"Lower blood calcium",
		"Are made only by the pineal gland"
	], 0, "The lecture lists the gonads as the targets and ties these hormones to gametes plus secondary sex characteristics. FSH and LH from the pituitary are what stimulate the gonads."),
	card("e46", "endocrine", "The pineal gland", [
		"Is part of the epithalamus and makes melatonin, which rises at night, falls by day, and helps set sleep",
		"Is the pacemaker of the heart",
		"Secretes insulin when blood sugar is high",
		"Requires iodine the way the thyroid does"
	], 0, "Melatonin tracks light and dark. The lecture also notes it can affect reproductive organs."),
	card("e47", "endocrine", "Which is a secondary endocrine role, not the organ’s main job?", [
		"Kidneys release erythropoietin and renin; the heart releases atrial natriuretic peptide",
		"The thyroid’s only job is to digest fat",
		"The pituitary stores bile",
		"Sweat glands secrete insulin into the blood"
	], 0, "Erythropoietin increases red-cell production. Renin raises blood pressure. ANP lowers blood pressure. Digestive organs also release hormones that drive digestion."),
	card("e48", "endocrine", "Where is oxytocin produced?", [
		"In the hypothalamus, then stored in the posterior pituitary",
		"In the anterior pituitary",
		"In thyroid follicles",
		"In the adrenal medulla"
	], 0, "Production and storage are separate. The hypothalamus makes oxytocin and ADH. The posterior lobe only stores them."),
	card("e49", "endocrine", "Where is antidiuretic hormone stored?", [
		"Posterior pituitary",
		"Anterior pituitary",
		"Thyroid isthmus",
		"Pancreatic islet"
	], 0, "ADH is made in the hypothalamus and held in the posterior lobe until release. The anterior lobe is where TSH and the other stimulating hormones are produced."),
	card("e50", "endocrine", "Where is thyroid-stimulating hormone produced?", [
		"Anterior pituitary",
		"Hypothalamus",
		"Posterior pituitary",
		"Parathyroid glands"
	], 0, "TSH is one of the six anterior-lobe hormones. TRH from the hypothalamus tells the pituitary to release it. The thyroid then releases T4.")
];
var heartCards = [
	card("h01", "heart", "The cardiovascular system in this lecture is", [
		"A closed system: the heart pumps, and vessels carry blood to the whole body",
		"An open system that dumps blood into body cavities",
		"A lymphatic circuit that does not return to the heart",
		"A set of ducts like exocrine glands"
	], 0, "The function is transport: oxygen, nutrients, wastes, and hormones to and from cells. The heart keeps that blood moving."),
	card("h02", "heart", "Which heart fact matches the lecture?", [
		"About 100,000 beats a day, about 1.5 million gallons a year, and about 5 to 30 liters per minute",
		"About 10 beats a day and 1 liter per year",
		"The heart rests for most of each day and does not pump continuously",
		"Output never changes with activity"
	], 0, "Those are the introductory numbers. Cardiac output later in the unit explains how rate and stroke volume set the liters per minute."),
	card("h03", "heart", "How is the heart oriented in the chest?", [
		"The apex points down and to the left; the base is superior; the heart sits left of midline, slightly rotated, on an oblique angle",
		"The apex is the superior base, pointing right",
		"The heart sits on the midline with the apex pointing at the right shoulder",
		"The base rests on the diaphragm and the apex touches the neck"
	], 0, "Apex is the pointed inferior end. Base is the broader superior end. That leftward oblique lie is why the left ventricle forms so much of the apex."),
	card("h04", "heart", "The pericardium", [
		"Is the membrane around the heart that cuts friction from constant beating",
		"Is the cardiac muscle itself",
		"Is the simple squamous lining of the chambers",
		"Is a valve between the atria"
	], 0, "Two layers: visceral pericardium against the heart, parietal pericardium toward the lungs and chest wall. The cavity between them is the friction-reducing space."),
	card("h05", "heart", "Visceral and parietal pericardium are", [
		"Visceral is the inner layer on the heart; parietal is the outer layer toward the lungs and thoracic wall",
		"Visceral is outside; parietal is on the muscle",
		"Both names mean the myocardium",
		"Parietal pericardium is the endocardium"
	], 0, "The balloon-and-fist picture in the lecture is the same idea: the fist is the heart, the clinging layer is visceral, the outer layer is parietal."),
	card("h06", "heart", "The three layers of the heart wall, from outside in, are", [
		"Epicardium, myocardium, endocardium",
		"Endocardium, parietal pericardium, blood",
		"Myocardium, valve, auricle",
		"Parietal pericardium, air space, diaphragm"
	], 0, "Epicardium is the visceral pericardium. Myocardium is cardiac muscle and the thickest layer. Endocardium lines the chambers and is endothelium, a simple squamous epithelium."),
	card("h07", "heart", "Atria and ventricles", [
		"Atria receive blood and push it into the ventricles; ventricles discharge blood out of the heart",
		"Ventricles only receive blood; atria pump it to the lungs and body",
		"Both sides only store blood and never contract",
		"The left atrium is the most muscular chamber"
	], 0, "There are two atria and two ventricles. The left ventricle is the most muscular chamber because it pumps the systemic circuit."),
	card("h08", "heart", "Which external landmark is paired correctly?", [
		"Auricles sit on the atria; interventricular sulci separate the ventricles lengthwise; the coronary sulcus separates atria from ventricles crosswise",
		"Auricles are the semilunar valves",
		"The coronary sulcus runs between the two ventricles only",
		"Interventricular sulci separate the atria from each other horizontally"
	], 0, "There is an anterior and a posterior interventricular sulcus. Fat often marks the sulci, and coronary vessels travel in them."),
	card("h09", "heart", "“Holes in the heart” in this lecture means", [
		"Abnormal connections between the right and left atria, or between the right and left ventricles",
		"The normal openings of the venae cavae",
		"The coronary arteries leaving the aorta",
		"The space inside the pericardial cavity"
	], 0, "Those connections let blood skip the separation between the two sides. The normal path keeps the right-heart and left-heart streams apart."),
	card("h10", "heart", "The four valves and their one-way rules are", [
		"Two AV valves let blood flow only from atria to ventricles; two semilunar valves let blood flow only from ventricles out into circulation",
		"AV valves guard the aorta and pulmonary trunk",
		"Semilunar valves sit between atria and ventricles",
		"All four valves open at the same time during filling"
	], 0, "The AV valves are the tricuspid (right) and mitral (left). The semilunar valves are pulmonary and aortic."),
	card("h11", "heart", "The heart is a double pump. Which pairing is correct?", [
		"The right side sends deoxygenated blood to the lungs; the left side sends oxygenated blood to the body",
		"The right side feeds the body; the left side feeds only the lungs",
		"Both sides send oxygenated blood through the venae cavae",
		"Oxygenation is what decides whether a vessel is an artery"
	], 0, "Right heart, pulmonary circuit, lungs. Left heart, systemic circuit, body. Arteries leave the heart and veins return to it, whether the blood is oxygenated or not."),
	card("h12", "heart", "Which vessels belong to the pulmonary circuit on the right side of the heart?", [
		"Superior vena cava, inferior vena cava, pulmonary trunk, and pulmonary arteries",
		"Pulmonary veins and the aorta",
		"Only the aorta and coronary arteries",
		"Only the left AV valve"
	], 0, "Systemic-circuit vessels on the left are the pulmonary veins (returning from the lungs) and the aorta (leaving for the body)."),
	card("h13", "heart", "Starting at the venae cavae, which order is the pulmonary circuit?", [
		"Venae cavae, right atrium, right AV valve, right ventricle, pulmonary valve, pulmonary trunk, pulmonary arteries, lungs",
		"Venae cavae, left atrium, aortic valve, lungs",
		"Pulmonary veins, right ventricle, aorta, lungs",
		"Right ventricle, right atrium, venae cavae, lungs"
	], 0, "The right atrium receives deoxygenated blood. The right ventricle pumps it toward the lungs. The pulmonary circuit ends once the lungs oxygenate the blood."),
	card("h14", "heart", "After the lungs, systemic flow runs", [
		"Pulmonary veins, left atrium, left AV valve, left ventricle, aortic valve, aorta, body",
		"Pulmonary arteries, right atrium, aorta",
		"Superior vena cava, left ventricle, pulmonary trunk",
		"Aorta, right AV valve, lungs, coronary sinus"
	], 0, "Pulmonary veins are the exception people miss: they carry oxygenated blood, but they are still veins because they bring blood to the heart."),
	card("h15", "heart", "The same four-step pattern happens on both sides of the heart. It is", [
		"Veins fill an atrium, the atrium pumps across an AV valve into a ventricle, the ventricle pumps through a semilunar valve into a large artery, and that artery carries blood away",
		"Arteries fill the ventricles first, then the atria",
		"Both ventricles pump into the venae cavae",
		"Semilunar valves fill the atria"
	], 0, "Right and left are anatomically parallel. What differs is where the large artery goes: lungs on the right, body on the left."),
	card("h16", "heart", "During one heartbeat, the two sides", [
		"Contract together: both atria pump into both ventricles, then both ventricles pump, one to the lungs and one to the body",
		"Alternate, so the right side finishes the whole circuit before the left side starts",
		"Never eject blood in the same heartbeat",
		"Use the pulmonary trunk and the aorta to carry the same oxygenated blood"
	], 0, "One beat moves blood in both circuits. As the pulmonary trunk carries deoxygenated blood to the lungs, the aorta carries oxygenated blood to the body."),
	card("h17", "heart", "Coronary arteries", [
		"Leave the aorta near its base and deliver highly oxygenated, high-pressure blood to the heart muscle itself",
		"Drain deoxygenated blood from the body into the right atrium",
		"Are veins that return blood from the lungs",
		"Open only during atrial diastole and never from the aorta"
	], 0, "The heart does not feed itself from the blood sitting in the chambers. It has its own arterial supply off the aorta. A heart attack is a blocked coronary artery."),
	card("h18", "heart", "Systole and diastole", [
		"Systole is contraction and high pressure; diastole is relaxation and low pressure",
		"Systole is relaxation; diastole is contraction",
		"Both words mean the same phase of filling",
		"Diastole is when the semilunar valves first open to eject blood"
	], 0, "In ventricular systole the ventricles eject into the pulmonary trunk and aorta while the atria are refilling. In ventricular diastole the ventricles refill and pressure is low."),
	card("h19", "heart", "Put the right-heart steps in order after blood is already in the right atrium.", [
		"Right AV valve, right ventricle, pulmonary semilunar valve, pulmonary trunk",
		"Aortic valve, left ventricle, pulmonary veins",
		"Pulmonary veins, mitral valve, aorta",
		"Left AV valve, lungs, superior vena cava"
	], 0, "Blood leaves the right atrium only through the right AV valve. It leaves the right ventricle only through the pulmonary valve, into the trunk, then the right and left pulmonary arteries."),
	card("h20", "heart", "The pulmonary trunk", [
		"Is the first large artery blood enters on the way to the lungs, and it splits into the pulmonary arteries",
		"Returns oxygenated blood to the left atrium",
		"Is a vein that empties into the right atrium",
		"Is another name for the aorta"
	], 0, "Arteries carry blood away from the heart. The pulmonary trunk and arteries head for the lungs even though that blood is still deoxygenated."),
	card("h21", "heart", "The left AV valve is also called the mitral valve. Blood crosses it when moving from", [
		"The left atrium into the left ventricle",
		"The left ventricle into the aorta",
		"The right ventricle into the pulmonary trunk",
		"The lungs into the pulmonary arteries"
	], 0, "AV valves connect atrium to ventricle. The aortic semilunar valve, not the mitral valve, guards the exit into the aorta."),
	card("h22", "heart", "Which chamber pumps oxygenated blood into the aorta?", [
		"Left ventricle",
		"Right ventricle",
		"Right atrium",
		"Left atrium"
	], 0, "The left atrium receives oxygenated blood from the pulmonary veins and only delivers it to the left ventricle. The left ventricle generates the systemic pressure."),
	card("h23", "heart", "Deoxygenated blood from the body enters the heart through", [
		"The superior and inferior venae cavae, into the right atrium",
		"The pulmonary veins, into the left atrium",
		"The aorta, into the left ventricle",
		"The coronary arteries, into the right ventricle"
	], 0, "That is step one of getting oxygen into the blood: collect oxygen-poor blood from the body, then send it to the lungs."),
	card("h24", "heart", "Oxygenated blood from the lungs enters the heart through", [
		"The pulmonary veins, into the left atrium",
		"The pulmonary arteries, into the right atrium",
		"The venae cavae, into the left ventricle",
		"The coronary sinus only"
	], 0, "Left and right pulmonary veins complete the return from the lungs. From the left atrium the blood still has to cross the left AV valve before the left ventricle can send it to the body.")
];
var lymphCards = [
	card("l01", "lymph", "The lymphatic system in this lecture has two kinds of structure and three jobs. The jobs are", [
		"Return leaked fluid to the blood, carry dietary lipids, and take part in immunity",
		"Pump blood, make red cells, and secrete insulin",
		"Only filter urine",
		"Replace the nodal system of the heart"
	], 0, "The structures are lymphatic vessels and lymphoid organs. The cells emphasized are macrophages, dendritic cells, and lymphocytes."),
	card("l02", "lymph", "Lymph is", [
		"Plasma that left the capillaries, sat in the interstitial fluid, and is now inside lymphatic vessels",
		"Whole blood inside arteries",
		"Urine in the renal pelvis",
		"The fluid only inside the pericardial cavity"
	], 0, "If that fluid is not picked up, it accumulates in the tissues as edema."),
	card("l03", "lymph", "At a capillary, before lymph is involved,", [
		"Plasma is pushed out at the arterial end by blood pressure, and most of it is pulled back at the venous end by osmotic pressure",
		"All plasma stays in the vessel",
		"Osmotic pressure empties the capillary at the arterial end",
		"Lymph nodes push plasma out of arteries"
	], 0, "The lymphatic vessels exist for the fraction that is not pulled back. That leftover is what becomes lymph."),
	card("l04", "lymph", "Edema is more likely when there is", [
		"More fluid delivered to the capillary bed, higher blood pressure, or less fluid removed from the bed",
		"Perfect balance between blood pressure and osmotic pressure",
		"A lower blood pressure and faster venous removal",
		"Fewer capillaries in the tissue"
	], 0, "Any of those three tips the bed toward fluid left in the tissue. Failed lymphatic pickup does the same thing."),
	card("l05", "lymph", "Edema and effusion differ because", [
		"Edema is fluid in the tissue and is not drainable; effusion is fluid in a cavity and is drainable",
		"Both words mean a clot in an artery",
		"Edema is always inside an empty space such as the abdomen",
		"Effusion is another name for lymph inside a node"
	], 0, "Tissue fluid is mixed into the tissue. Cavity fluid sits in a space that can be drained."),
	card("l06", "lymph", "Which of the following is an effusion?", [
		"A ruptured splenic mass leaking blood into the abdomen",
		"Fingers swelling while gardening on a hot day",
		"Pulmonary edema from left-sided heart failure",
		"A bruise inside the skin from low platelets"
	], 0, "Blood in the abdominal cavity is fluid in a space. Swollen fingers and fluid in lung tissue are edema, not a drainable cavity."),
	card("l07", "lymph", "A person with left-sided heart failure develops pulmonary edema. Which treatment fits the lecture?", [
		"A diuretic such as Lasix, so the kidneys excrete more fluid",
		"A chest tube to drain the lung tissue",
		"A rescue inhaler as the only treatment, with no change in fluid",
		"Extra ADH so the kidneys keep more water"
	], 0, "Pulmonary edema is fluid in lung tissue, not a pleural effusion you can drain with a chest tube. Removing fluid through the kidneys is the lecture’s choice."),
	card("l08", "lymph", "Lymph nodes filter lymph before it returns to the blood. They remove", [
		"Bacteria, viruses, cancer cells, and cell debris",
		"Only excess salt, and they ignore cells",
		"Oxygen, so lymph is always deoxygenated on purpose",
		"Red cells that are still healthy, as their main job"
	], 0, "Filter here means remove. The three node regions in the lecture are cervical, axillary, and inguinal."),
	card("l09", "lymph", "Inside a lymph node, macrophages and lymphocytes divide the work.", [
		"Macrophages are the filtering cells and eat what should not be there; lymphocytes are the detecting cells",
		"Macrophages make antibodies and live only in the cortex; lymphocytes do not respond to antigens",
		"Both cells only carry oxygen",
		"Lymphocytes are monocytes that have left the blood, and macrophages are the same as B cells"
	], 0, "Macrophages in nodes come from monocytes. Lymphocytes include T cells and B cells. Nodes slow the lymph so both jobs have time."),
	card("l10", "lymph", "Cortex and medulla of a lymph node", [
		"The outer cortex holds lymphocytes in follicles and makes antibodies; the inner medulla holds macrophages",
		"The medulla holds only B cells; the cortex is empty",
		"Both regions are simple squamous endothelium with no immune cells",
		"The cortex is the recycle center for worn red cells"
	], 0, "Most nodes are kidney-shaped, under half an inch long, and buried in connective tissue. The follicle centers in the cortex are the antibody centers."),
	card("l11", "lymph", "Which organs are the lymphoid organs in this lecture, besides lymph nodes?", [
		"Spleen, thymus, tonsils, Peyer’s patches, and appendix",
		"Pituitary, thyroid, and adrenals only",
		"Liver, stomach, and kidneys only",
		"SA node and AV node"
	], 0, "All of them are packed with lymphocytes. Lymph nodes are not the only lymphatic organs."),
	card("l12", "lymph", "The spleen", [
		"Filters blood, holds lymphocytes for immune surveillance, and recycles worn-out red cells",
		"Is where T cells mature, overlying the heart",
		"Makes insulin",
		"Is a tonsil in the throat"
	], 0, "The lecture calls it a recycle center. Removing it, a splenectomy, can treat some autoimmune disease, raises infection risk, and leaves the liver to take over part of the work."),
	card("l13", "lymph", "The thymus", [
		"Lies over the heart, works hardest in youth, and helps make the T lymphocytes that HIV attacks",
		"Filters blood and recycles red cells in adults at its largest size",
		"Sits in the ileum and is called a Peyer’s patch",
		"Is an exocrine salivary gland"
	], 0, "T cells learn what to fight in the thymus. The gland shrinks after childhood, which matches the endocrine lecture as well."),
	card("l14", "lymph", "Tonsils and tonsillitis", [
		"Tonsils trap pathogens in the throat; tonsillitis is inflammation from congestion, and chronically inflamed tonsils can become a source of infection",
		"Tonsils are valves in leg veins",
		"Tonsillitis is a low platelet count",
		"Tonsils make red cells"
	], 0, "They are small lymphoid masses. Congestion is the same idea the lecture uses for an inflamed appendix."),
	card("l15", "lymph", "Peyer’s patches", [
		"Sit in the wall of the ileum and filter bacteria, viruses, and debris from the intestinal contents",
		"Are the cervical lymph nodes",
		"Mature T cells over the heart",
		"Are the coronary arteries"
	], 0, "Similar follicles sit in the appendix. The lecture says about 70% of the immune system is in the Peyer’s patches and links patch dysfunction to “leaky gut,” allergies, and autoimmune disease."),
	card("l16", "lymph", "The appendix", [
		"Filters intestinal contents like Peyer’s patches. Appendicitis is congestion that can be life-threatening if the appendix is infected or ruptures",
		"Is the pacemaker of the heart",
		"Stores ADH",
		"Is a vein with failed valves"
	], 0, "The lecture also says removal may raise the risk of autoimmune disease. That is a different claim from the emergency of a ruptured appendix."),
	card("l17", "lymph", "Innate immunity and adaptive immunity", [
		"Innate defenses are inborn and immediate; adaptive defenses are learned and specific",
		"Both are learned at the thymus after birth and neither is present in a newborn",
		"Innate immunity is only antibodies; adaptive immunity is only skin",
		"Adaptive immunity never involves lymphocytes"
	], 0, "The immune system is a functional system, not one anatomical organ. Immunity in the lecture’s definition is specific resistance to disease."),
	card("l18", "lymph", "The first line of defense is", [
		"Skin, mucous membranes, and their secretions",
		"Antibodies and lymphocytes",
		"Only the inflammatory response",
		"Vaccines"
	], 0, "Acidic sweat, sebum, mucus, enzymes in saliva and tears, and acidic gastric juice are the secretions. The second line is innate cells plus inflammation. The third line is lymphocytes and antibodies."),
	card("l19", "lymph", "Which cells belong to the innate second line?", [
		"Macrophages, natural killer cells, and dendritic cells",
		"Only B cells that secrete antibodies",
		"Red cells and platelets",
		"Chief cells of the stomach"
	], 0, "Macrophages phagocytize and can cause fever; they come from monocytes. NK cells are lymphocytes that kill many cancer cells and virus-infected cells. Dendritic cells activate the adaptive system."),
	card("l20", "lymph", "The four signs of inflammation in this lecture are", [
		"Redness, heat, pain, and edema",
		"Pallor, cold, numbness, and shrinking",
		"Only fever and a rash",
		"Agglutination, thrombus, embolus, and petechiae"
	], 0, "Seeing all four means the body is answering an injury. Inflammation limits spread, clears debris and pathogens, and sets up repair."),
	card("l21", "lymph", "Cytokines released by damaged cells", [
		"Dilate vessels (redness and heat), make capillaries leaky (swelling and pain), and bring white cells in",
		"Shut off the immune system for the rest of life",
		"Lower body temperature and close every capillary",
		"Convert fibrinogen into hemoglobin"
	], 0, "The lecture includes kinins and histamine among those chemicals. White cells then leave the blood by diapedesis and phagocytize. The goal is healing."),
	card("l22", "lymph", "A cytokine storm is", [
		"Hyperinflammation in which the immune response does more damage than the disease",
		"A normal first-line barrier of intact skin",
		"Passive immunity from breast milk",
		"The delay at the AV node"
	], 0, "Cytokines are supposed to call a measured response. In a storm they amplify inflammation past the point of help."),
	card("l23", "lymph", "T lymphocytes and B lymphocytes", [
		"T cells attack antigens directly and learn in the thymus; B cells release antibodies and learn in the bone marrow",
		"T cells make antibodies in the bone marrow; B cells are the same as neutrophils",
		"Both cells are innate macrophages",
		"Neither cell can recognize an antigen"
	], 0, "The lecture’s memory hook is the first letter: T in the thymus, B in the bone marrow. Antibodies act on antigens indirectly."),
	card("l24", "lymph", "An antigen is", [
		"Any substance that excites the immune system, including microbes, foreign proteins, and sometimes self proteins",
		"Only a harmless nutrient such as glucose",
		"A hormone stored in the posterior pituitary",
		"The lumen of an artery"
	], 0, "Examples from the lecture: bacteria, fungi, viruses, red-cell proteins A and B, pollen, and self proteins in autoimmune disease."),
	card("l25", "lymph", "How a lymphocyte becomes specific, in lecture order,", [
		"It is born in red marrow, matures in the thymus or marrow, meets one antigen in a secondary organ, and then circulates looking for that antigen",
		"It recognizes every antigen equally well for life",
		"It learns its antigen inside a red cell",
		"It is activated only in the stomach"
	], 0, "Secondary lymphoid organs, including nodes and spleen, are where naive cells meet antigen. After that, each cell is committed to one target."),
	card("l26", "lymph", "Passive immunity and active immunity", [
		"Passive immunity uses antibodies made by someone else and lasts a few weeks; active immunity is your own B cells making antibodies after infection or vaccination",
		"Passive immunity is lifelong; active immunity lasts two days",
		"Both require the recipient’s B cells to build the antibodies",
		"Vaccines are passive; breast milk is active"
	], 0, "Passive sources in the lecture: placenta, breast milk, and donated plasma. Protection is about 2 to 3 weeks. Active immunity can come from getting sick or from a vaccine."),
	card("l27", "lymph", "The SARS-CoV-2 vaccine, as used in this lecture, produces", [
		"Active immunity",
		"Passive immunity",
		"Only innate immunity, with no lymphocytes",
		"A cytokine storm by design"
	], 0, "A vaccine presents antigen so the recipient’s own B cells make antibodies. That is active immunity."),
	card("l28", "lymph", "Giving antibodies from the plasma of a recovered patient to a sick patient produces", [
		"Passive immunity",
		"Active immunity",
		"A new ABO blood type",
		"Innate immunity that lasts for years"
	], 0, "The sick patient’s B cells did not make those antibodies. Someone else did. The lecture treats that transfusion as short-lived passive immunity."),
	card("l29", "lymph", "Neutralization and agglutination", [
		"Are two antibody actions, and both make phagocytosis more effective",
		"Are the two heart sounds",
		"Destroy antibodies so antigens can spread",
		"Are how steroid hormones travel in blood"
	], 0, "Neutralization covers the dangerous parts of an antigen. Agglutination clumps cells. Macrophages then clear the result more easily."),
	card("l30", "lymph", "Allergy and autoimmune disease both overreact, but", [
		"Allergy targets a harmless environmental antigen and stops when that antigen is gone; autoimmune disease targets a self antigen that never leaves",
		"Both stop as soon as the person leaves the room",
		"Autoimmune disease targets pollen; allergy targets the thyroid",
		"Neither one damages tissue"
	], 0, "The self antigen is part of the body, so the reaction does not get an “off” signal from the antigen disappearing."),
	card("l31", "lymph", "Which autoimmune example is paired with the tissue the lecture says it damages?", [
		"Type I diabetes destroys pancreatic beta cells; Hashimoto’s thyroiditis destroys the thyroid; multiple sclerosis destroys white matter",
		"Celiac disease destroys joints; rheumatoid arthritis destroys microvilli",
		"Lupus destroys only the spleen and never the kidney",
		"Hashimoto’s destroys bone marrow red cells only"
	], 0, "Also in the lecture: celiac disease destroys microvilli, rheumatoid arthritis destroys joints, and lupus attacks nuclei, with damage in kidney, heart, lung, and skin."),
	card("l32", "lymph", "Natural killer cells", [
		"Are lymphocytes of the innate system that kill a variety of cancer cells and virus-infected cells",
		"Are B cells that secrete antibodies after a vaccine",
		"Are red cells with abnormal hemoglobin",
		"Are the pacemaker cells of the right atrium"
	], 0, "They are not the same as cytotoxic T cells, which are adaptive and specific. NK cells respond to a range of damaged or infected cells without that one-antigen training.")
];
var vesselCards = [
	card("v01", "vessels", "The heart can beat without a command from the nervous system because", [
		"Cardiac muscle cells depolarize on their own, and the nodal system sets the rhythm",
		"The sympathetic chain must fire before every beat",
		"The pituitary releases a stimulating hormone for each beat",
		"Skeletal muscle around the heart squeezes it"
	], 0, "Two systems adjust or set the beat. The autonomic nervous system only adjusts the rhythm. The nodal system controls it and does not depend on the nervous system."),
	card("v02", "vessels", "Sympathetic and parasympathetic fibers change the heart in opposite ways.", [
		"Sympathetic fibers raise heart rate and contraction strength; parasympathetic fibers lower both",
		"Sympathetic fibers lower rate; parasympathetic fibers raise force",
		"Both branches only change blood type",
		"Parasympathetic fibers replace the SA node"
	], 0, "The ANS does not create the beat. It turns the existing nodal rhythm up or down."),
	card("v03", "vessels", "Which order matches the nodal system?", [
		"SA node, AV node, bundle of His and bundle branches, Purkinje fibers",
		"Purkinje fibers, bundle branches, SA node, AV node",
		"AV node, pulmonary valve, SA node, aorta",
		"Bundle of His, vena cava, AV node, mitral valve"
	], 0, "The SA node is in the right atrium and is the pacemaker. The AV node sits at the junction of atria and ventricles. The bundle of His and bundle branches run in the interventricular septum. Purkinje fibers spread through the ventricular muscle."),
	card("v04", "vessels", "The conduction sequence of one beat is", [
		"SA node fires, the impulse spreads through the atria, the atria contract, the AV node delays, then the signal runs through the bundle system and the ventricles contract",
		"Ventricles contract first so the atria can fill",
		"The AV node starts the beat and the SA node only delays it",
		"Purkinje fibers fire before the atria contract"
	], 0, "The brief AV delay gives the ventricles time to finish filling before they contract and eject."),
	card("v05", "vessels", "Which of the following are conducting fibers?", [
		"Bundle of His, bundle branches, and Purkinje fibers",
		"Only the SA node",
		"Only the AV valves",
		"The coronary arteries"
	], 0, "The lecture’s choices were bundle of His, bundle branches, Purkinje fibers, or all of them. All of those are conducting fibers. The nodes start and delay the signal; the fibers carry it."),
	card("v06", "vessels", "What do Purkinje fibers do?", [
		"Distribute the electrical signal through the ventricular myocardium",
		"Act as the first fibers to receive the signal from the AV node",
		"Carry the signal down the interventricular septum alone",
		"Set the heart rate from the right atrium"
	], 0, "The bundle of His is first after the AV node. The bundle branches carry the signal down the septum. Purkinje fibers spread it through the ventricular muscle so the ventricles contract."),
	card("v07", "vessels", "Which rhythm label matches the lecture?", [
		"Sinus rhythm, tachycardia, and bradycardia can be normal patterns; arrhythmia is abnormal",
		"Arrhythmia is the only normal rhythm",
		"Sinus rhythm means the AV node has failed",
		"Bradycardia means the ventricles are fibrillating"
	], 0, "An artificial pacemaker replaces the SA node when that pacemaker can no longer set a usable rhythm."),
	card("v08", "vessels", "The five phases of the cardiac cycle, in lecture order, are", [
		"Atrial diastole, atrial systole, isovolumetric contraction, ventricular systole, isovolumetric relaxation",
		"Ventricular systole first, then atrial diastole, then a pause with every valve open",
		"Only systole and diastole, with no isovolumetric phases",
		"Isovolumetric relaxation, then ejection, then atrial systole, then a clot"
	], 0, "One cardiac cycle is one heartbeat: contraction plus relaxation. Pressure and valve position change at each phase."),
	card("v09", "vessels", "During atrial diastole", [
		"The heart is relaxed, pressure is low, AV valves are open, semilunar valves are closed, and blood flows passively into the atria and on into the ventricles",
		"All valves are closed and the ventricles eject",
		"The semilunar valves are open and the atria are contracting",
		"The ventricles are empty and the AV valves are shut"
	], 0, "This is the first phase, ventricular filling while everything is relaxed. Most ventricular filling is passive, before the atria contract."),
	card("v10", "vessels", "Atrial systole", [
		"Is the atria contracting and topping off the ventricles, which are still relaxed and end maximally filled",
		"Is ventricular ejection through open semilunar valves",
		"Is the phase when every valve is closed",
		"Is the “dub” of semilunar valves slamming shut"
	], 0, "The ventricles stay in diastole during this phase. Atrial contraction finishes filling them."),
	card("v11", "vessels", "Isovolumetric contraction means", [
		"Ventricular pressure is rising, every valve is closed, and the ventricles are sealed chambers",
		"Blood is leaving through open semilunar valves",
		"The atria are filling the ventricles through open AV valves",
		"The semilunar valves have just closed at the end of ejection"
	], 0, "Volume cannot change while both sets of valves are shut. Pressure climbs until it beats the pressure in the pulmonary trunk and aorta."),
	card("v12", "vessels", "Ventricular systole, the ejection phase,", [
		"Opens the semilunar valves, ejects blood, and is the systolic blood pressure. The atria are relaxed and filling",
		"Closes every valve and holds volume constant",
		"Is passive filling through open AV valves",
		"Is the low-pressure number in a blood-pressure reading"
	], 0, "Ejection starts only when ventricular pressure passes arterial pressure. Systolic pressure is this phase. Diastolic pressure is tied to the relaxation that follows."),
	card("v13", "vessels", "Isovolumetric relaxation", [
		"Begins as the ventricles relax, the semilunar valves close, and the AV valves open once atrial pressure exceeds ventricular pressure. This is the diastolic pressure",
		"Is the ejection of blood into the aorta",
		"Is atrial contraction with open semilunar valves",
		"Happens only on the right side of the heart"
	], 0, "Semilunar valves shut when ventricular pressure falls below arterial pressure. AV valves then open and filling can start again."),
	card("v14", "vessels", "The heart sounds in this lecture are", [
		"“Lub” from the AV valves closing, and “dub” from the semilunar valves closing, with the pause as the heart fills",
		"Lub from the semilunar valves opening, and dub from the SA node",
		"Both sounds from the atria contracting",
		"Lub from a coronary artery closing"
	], 0, "The slides attach lub to AV-valve closure and dub to semilunar-valve closure. In standard timing, the AV valves close as ventricular systole begins, and the semilunar valves close as ejection ends."),
	card("v15", "vessels", "Cardiac output is", [
		"The amount of blood each ventricle pumps in one minute, equal to stroke volume times heart rate",
		"The volume of one beat only, in beats per minute",
		"Blood pressure times vessel length",
		"The hematocrit times the heart rate"
	], 0, "CO = HR × SV. The lecture’s average is 75 beats/min × 70 ml/beat = 5250 ml/min, or 5.25 L/min, close to the whole blood volume each minute."),
	card("v16", "vessels", "Stroke volume is", [
		"The volume one ventricle ejects in one beat. The lecture average is 70 ml, and it depends on how much the muscle is stretched",
		"The number of beats in a minute",
		"Always 5.25 liters, regardless of stretch",
		"The same number as heart rate"
	], 0, "More stretch, stronger contraction. Venous return, the deoxygenated blood coming back from the body, is the main factor that sets that stretch."),
	card("v17", "vessels", "If stroke volume falls, heart rate often rises so cardiac output can stay the same. Which pair shows that?", [
		"75 beats/min × 70 ml equals 105 beats/min × 50 ml, both 5.25 L/min",
		"A lower stroke volume always lowers output, and heart rate cannot change",
		"Heart rate falls whenever stroke volume falls",
		"Output is stroke volume divided by heart rate"
	], 0, "The product is what the body is defending. Rate and force can trade off. They cannot always trade off enough, which is the point of heart failure."),
	card("v18", "vessels", "A ventricle ejects 100 ml per beat at 60 beats per minute. Cardiac output is", [
		"6,000 ml/min",
		"160 ml/min",
		"6,000 beats/min",
		"1.6 L/min"
	], 0, "CO = 100 ml/beat × 60 beats/min. Units of cardiac output are volume per minute. Stroke volume is the 100 ml/beat; heart rate is the 60."),
	card("v19", "vessels", "End-diastolic volume is 120 ml and end-systolic volume is 50 ml. Stroke volume is", [
		"70 ml/beat",
		"170 ml/beat",
		"50 ml/beat",
		"120 beats/min"
	], 0, "What was in the ventricle at the end of filling, minus what is left after ejection, is the stroke volume: 120 − 50 = 70 ml/beat."),
	card("v20", "vessels", "Stroke volume is 70 ml/beat and heart rate is 80 beats/min. How much blood is pumped in one minute?", [
		"5,600 ml/min",
		"150 ml/min",
		"5,600 beats/min",
		"70 L/min"
	], 0, "70 × 80 = 5,600 ml/min. That is the cardiac output, not the stroke volume and not the heart rate."),
	card("v21", "vessels", "Congestive heart failure in this lecture is", [
		"A weak heart with a falling stroke volume, and a heart rate that cannot make up the difference, so cardiac output falls",
		"A faster heart with a larger stroke volume",
		"Only a valve that is stuck open, with normal muscle",
		"A high platelet count"
	], 0, "Causes include atherosclerosis, high blood pressure, and muscle damage after a heart attack. Drugs used for CHF aim to raise stroke volume."),
	card("v22", "vessels", "Left-sided and right-sided failure back up in different places.", [
		"Left-sided failure backs up into the lungs and causes coughing; right-sided failure backs up into the body and swells feet, ankles, and fingers",
		"Left-sided failure swells the ankles; right-sided failure fills only the lungs",
		"Neither side affects the other, ever",
		"Both sides back up into the lymphatic vessels only"
	], 0, "Blood backs up where it came from. The left heart receives from the lungs. The right heart receives from the body. One-sided failure eventually fails the whole heart."),
	card("v23", "vessels", "What heart rate would you expect when stroke volume is down, as in congestive heart failure?", [
		"An increased heart rate",
		"A decreased heart rate",
		"No change in heart rate",
		"A rate of zero until the SA node is replaced"
	], 0, "Rate rises to defend cardiac output when each beat ejects less. In CHF that rise is not enough, so output still falls, but the expected direction of the rate is up."),
	card("v24", "vessels", "In a patient with heart failure, what do we want the blood vessels to do?", [
		"Dilate",
		"Constrict",
		"Stay completely unchanged",
		"Close their valves permanently"
	], 0, "Wider vessels lower the resistance the weak ventricle has to push against. Constriction would raise the work of a heart that is already failing."),
	card("v25", "vessels", "In heart failure, what do we want the kidneys to do?", [
		"Get rid of extra fluid",
		"Keep as much fluid as possible",
		"Ignore fluid balance",
		"Release more renin so volume keeps rising"
	], 0, "Extra volume backs up into lungs or tissues. Losing fluid, as with a diuretic, lowers that backup. This is the same idea as treating pulmonary edema with a drug like Lasix."),
	card("v26", "vessels", "Which vessels are described correctly?", [
		"Arteries and arterioles carry blood away from the heart toward capillaries; venules and veins return it; capillaries are where blood and tissues exchange",
		"Veins always carry oxygenated blood; arteries always carry deoxygenated blood",
		"Capillaries are only on the arterial side and never connect to veins",
		"Arterioles return blood to the atria"
	], 0, "Direction relative to the heart, not oxygen, names the vessel. Pulmonary arteries still carry deoxygenated blood."),
	card("v27", "vessels", "The three layers of a blood-vessel wall are", [
		"Tunica intima (endothelium), tunica media (smooth muscle under autonomic control), and tunica externa (connective tissue)",
		"Epicardium, myocardium, endocardium",
		"Cortex, medulla, capsule",
		"Only endothelium, with no muscle in any artery"
	], 0, "The intima is the friction-reducing lining. The media changes diameter. The externa supports and protects. The lumen is the open space inside."),
	card("v28", "vessels", "Atherosclerosis and an aneurysm are", [
		"Atherosclerosis is an artery narrowed by fat; an aneurysm is an artery with a weakened wall that can rupture",
		"Both names for varicose veins",
		"Atherosclerosis is a vein with broken valves; an aneurysm is a low platelet count",
		"Both are harmless and never obstruct flow"
	], 0, "Fatty narrowing raises pressure, blocks flow, and can rupture into a clot. An aneurysm’s rupture can be fatal. Varicose veins are a different, nonfatal problem."),
	card("v29", "vessels", "Varicose veins are", [
		"Veins whose valves no longer work, related to age, genetics, or stress on the veins, and they are not fatal",
		"Arteries narrowed by fat",
		"The same emergency as a ruptured aneurysm",
		"Clots that have traveled to the brain"
	], 0, "Veins are low-pressure and need valves, plus the skeletal-muscle pump and the respiratory pump, to move blood toward the heart. Failed valves let blood pool."),
	card("v30", "vessels", "Arteries in this lecture", [
		"Carry blood away from the heart toward capillaries, run at high pressure, and include elastic arteries, muscular arteries, and arterioles",
		"Always carry oxygen-rich blood, including the pulmonary arteries",
		"Have valves as their main feature and run at low pressure",
		"Drain capillary beds"
	], 0, "In the pulmonary circuit they run toward the lungs. In the systemic circuit they run toward the cells. Arterioles hand blood to capillaries."),
	card("v31", "vessels", "Veins", [
		"Return blood to the heart, drain capillaries, run at low pressure, and include venules plus veins, often paired with arteries",
		"Are the high-pressure vessels that leave the left ventricle",
		"Have no relationship to arteries",
		"Exchange oxygen directly, the way capillaries do"
	], 0, "The lecture’s wording “towards from the heart” means toward the heart. Venules drain capillaries. Larger veins often travel with a matching artery."),
	card("v32", "vessels", "At a capillary, oxygen and carbon dioxide move", [
		"Oxygen leaves the blood for the cells; carbon dioxide leaves the cells for the blood, each down its concentration gradient",
		"Both gases move from low concentration to high concentration",
		"Oxygen enters the blood from resting cells because cells have more oxygen than blood",
		"Neither gas crosses a capillary wall"
	], 0, "Blood is high in oxygen and low in waste. Cells are the reverse. Everything in this lecture’s exchange moves from high to low."),
	card("v33", "vessels", "Fluid movement across a capillary depends on two pressures.", [
		"Blood pressure pushes plasma out; osmotic pressure pulls plasma in",
		"Osmotic pressure pushes plasma out; blood pressure has no role",
		"Both pressures only move fluid into the lymph nodes",
		"Neither pressure acts on the venous end"
	], 0, "On the arterial side, blood pressure wins and fluid leaves. On the venous side, osmotic pressure wins and most of that fluid returns."),
	card("v34", "vessels", "Which region of a capillary bed has the high blood pressure that drives fluid out?", [
		"The arterial end",
		"The venous end",
		"Only the lymphatic capillary",
		"The valve in a varicose vein"
	], 0, "Arterial end: blood pressure is greater than osmotic pressure, so plasma is pushed out. Venous end: osmotic pressure dominates and fluid is pulled back in."),
	card("v35", "vessels", "Which statement matches the arterial side of a capillary?", [
		"Plasma is pushed out by high blood pressure",
		"Plasma is pulled back in by high blood pressure",
		"Plasma is pushed out by high osmotic pressure",
		"Plasma is pulled back in by high osmotic pressure"
	], 0, "High blood pressure at the start of the capillary forces fluid into the interstitial space. The pull back in is the venous-side story."),
	card("v36", "vessels", "Which statement matches the venous side of a capillary?", [
		"Plasma is pulled back in by high osmotic pressure",
		"Plasma is pushed out by high blood pressure",
		"Plasma is pulled back in by high blood pressure",
		"Plasma is pushed out by high osmotic pressure"
	], 0, "By the venule end, blood pressure has fallen below osmotic pressure. Most of the plasma that left comes back. What does not come back can become lymph."),
	card("v37", "vessels", "Which arteries leave the aortic arch, in the usual pattern from the lecture diagram?", [
		"Brachiocephalic trunk, left common carotid artery, and left subclavian artery",
		"Right and left pulmonary veins",
		"Superior and inferior venae cavae",
		"Hepatic portal vein and splenic vein"
	], 0, "The brachiocephalic trunk then supplies the right common carotid and right subclavian. Coronary arteries leave the ascending aorta. The descending aorta continues behind the heart into the abdomen."),
	card("v38", "vessels", "The cerebral arterial circle is also called", [
		"The circle of Willis",
		"The hepatic portal system",
		"The coronary sulcus",
		"The sella turcica"
	], 0, "It links the internal carotid and vertebral-basilar routes on the underside of the brain, including the anterior, middle, and posterior cerebral arteries and the communicating arteries."),
	card("v39", "vessels", "The hepatic portal vein", [
		"Carries blood from digestive organs to the liver before that blood returns to the general circulation",
		"Carries oxygenated blood from the lungs to the left atrium",
		"Is an artery off the aortic arch",
		"Drains the brain into the superior vena cava directly, with no liver stop"
	], 0, "Portal blood mixes in liver sinusoids with arterial blood from the hepatic artery. Hepatic veins then leave the liver for the inferior vena cava. The lecture compares the portal vein arrangement to a chair."),
	card("v40", "vessels", "The skeletal-muscle pump and the respiratory pump", [
		"Help return low-pressure venous blood toward the heart",
		"Replace the SA node",
		"Are how arteries create systolic pressure",
		"Filter lymph in the inguinal nodes"
	], 0, "Contracting muscle squeezes veins, and valves stop backflow. Breathing changes pressure in the chest and abdomen and moves venous blood toward the heart.")
];
var CARDS = [
	...endocrineCards,
	...bloodCards,
	...heartCards,
	...vesselCards,
	...lymphCards
];
var ids = /* @__PURE__ */ new Set();
for (const item of CARDS) {
	if (ids.has(item.id)) throw new Error(`Duplicate card id ${item.id}`);
	ids.add(item.id);
	if (item.choices.length < 2 || item.answer < 0 || item.answer >= item.choices.length) throw new Error(`Bad choices on ${item.id}`);
}
var useStudy = create()(persist((set) => ({
	tags: {},
	setTag: (id, tag) => set((state) => ({ tags: {
		...state.tags,
		[id]: tag
	} })),
	clearTag: (id) => set((state) => {
		const tags = { ...state.tags };
		delete tags[id];
		return { tags };
	}),
	resetTags: (ids) => set((state) => {
		const tags = { ...state.tags };
		for (const id of ids) delete tags[id];
		return { tags };
	})
}), {
	name: "conduit-tags-v1",
	skipHydration: true
}));
var LETTERS = [
	"A",
	"B",
	"C",
	"D",
	"E",
	"F"
];
function shuffleCards(list) {
	const next = [...list];
	for (let i = next.length - 1; i > 0; i -= 1) {
		const j = Math.floor(Math.random() * (i + 1));
		const left = next[i];
		const right = next[j];
		if (left && right) {
			next[i] = right;
			next[j] = left;
		}
	}
	return next;
}
function collect(scope, kind, tags) {
	let cards = scope === "all" ? CARDS : CARDS.filter((item) => item.deck === scope);
	if (kind === "unseen") cards = cards.filter((item) => tags[item.id] !== "known");
	if (kind === "work") cards = cards.filter((item) => tags[item.id] === "work");
	return shuffleCards(cards);
}
function deckTitle(scope) {
	if (scope === "all") return "All five lectures";
	return DECKS.find((deck) => deck.id === scope)?.title ?? "Lecture";
}
function kindLabel(kind) {
	if (kind === "work") return "Needs work";
	if (kind === "all") return "Including known";
	return "Known cards hidden";
}
function ConduitApp() {
	const tags = useStudy((state) => state.tags);
	const setTag = useStudy((state) => state.setTag);
	const clearTag = useStudy((state) => state.clearTag);
	const resetTags = useStudy((state) => state.resetTags);
	const [round, setRound] = (0, import_react.useState)(null);
	const [armedReset, setArmedReset] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		useStudy.persist.rehydrate();
	}, []);
	const totals = (0, import_react.useMemo)(() => {
		let known = 0;
		let work = 0;
		for (const item of CARDS) if (tags[item.id] === "known") known += 1;
		else if (tags[item.id] === "work") work += 1;
		return {
			known,
			work,
			left: CARDS.length - known,
			total: CARDS.length
		};
	}, [tags]);
	function start(scope, kind, queue) {
		const next = queue ?? collect(scope, kind, useStudy.getState().tags);
		setRound({
			queue: next,
			index: 0,
			picked: null,
			correct: 0,
			wrong: 0,
			missed: [],
			scope,
			kind
		});
		setArmedReset(false);
	}
	function pick(choice) {
		setRound((current) => {
			if (!current || current.picked !== null) return current;
			const item = current.queue[current.index];
			if (!item) return current;
			const right = choice === item.answer;
			return {
				...current,
				picked: choice,
				correct: current.correct + (right ? 1 : 0),
				wrong: current.wrong + (right ? 0 : 1),
				missed: right ? current.missed : [...current.missed, item.id]
			};
		});
	}
	function tagCurrent(tag) {
		const item = round?.queue[round.index];
		if (!item || round?.picked === null) return;
		if (tags[item.id] === tag) clearTag(item.id);
		else setTag(item.id, tag);
	}
	function next() {
		setRound((current) => {
			if (!current || current.picked === null) return current;
			return {
				...current,
				index: current.index + 1,
				picked: null
			};
		});
	}
	const current = round?.queue[round.index];
	(0, import_react.useEffect)(() => {
		function onKey(event) {
			if (!round || !current) return;
			const target = event.target;
			if (target instanceof HTMLElement && target.tagName === "INPUT") return;
			if (round.picked === null) {
				const index = Number(event.key) - 1;
				if (index >= 0 && index < current.choices.length) {
					event.preventDefault();
					pick(index);
				}
				return;
			}
			if (event.key === "Enter" || event.key.toLowerCase() === "n") {
				event.preventDefault();
				next();
			} else if (event.key.toLowerCase() === "k") {
				event.preventDefault();
				tagCurrent("known");
			} else if (event.key.toLowerCase() === "w") {
				event.preventDefault();
				tagCurrent("work");
			}
		}
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	});
	if (!round) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Home$1, {
		totals,
		tags,
		armedReset,
		onArm: () => setArmedReset(true),
		onCancelArm: () => setArmedReset(false),
		onReset: () => {
			resetTags(CARDS.map((item) => item.id));
			setArmedReset(false);
		},
		onStart: start
	});
	if (!current) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Finished, {
		round,
		onHome: () => setRound(null),
		onAgain: () => start(round.scope, round.kind),
		onMissed: () => {
			const still = CARDS.filter((item) => round.missed.includes(item.id) && useStudy.getState().tags[item.id] !== "known");
			start(round.scope, "unseen", shuffleCards(still));
		},
		onIncludeKnown: () => start(round.scope, "all"),
		onClearKnown: () => {
			const ids = round.scope === "all" ? CARDS.map((item) => item.id) : CARDS.filter((item) => item.deck === round.scope).map((item) => item.id);
			resetTags(ids.filter((id) => useStudy.getState().tags[id] === "known"));
			start(round.scope, "unseen");
		}
	});
	const meta = DECKS.find((deck) => deck.id === current.deck);
	const right = round.picked === current.answer;
	const tag = tags[current.id];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto flex min-h-screen w-full max-w-2xl flex-col px-4 py-5 sm:px-6 sm:py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex items-center justify-between gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "min-h-11 rounded-xl px-3 text-sm font-semibold text-ink",
						onClick: () => setRound(null),
						children: "Lectures"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-muted tabular-nums",
						children: [
							round.index + 1,
							" / ",
							round.queue.length
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "inline-flex min-h-11 items-center gap-2 rounded-xl px-3 text-sm font-semibold text-ink",
						onClick: () => start(round.scope, round.kind),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shuffle, {
							className: "size-4",
							"aria-hidden": "true"
						}), "New shuffle"]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("progress", {
				className: "meter mt-3",
				value: round.index,
				max: round.queue.length,
				"aria-label": "Cards finished in this shuffle"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-sm text-muted",
				children: [
					deckTitle(round.scope),
					" · ",
					kindLabel(round.kind),
					" ·",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "tabular-nums",
						children: [
							round.correct,
							" right, ",
							round.wrong,
							" wrong"
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "mt-4 rounded-card border border-line bg-card px-4 py-5 sm:px-7 sm:py-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs font-semibold tracking-widest text-accent uppercase",
						children: [
							"Lecture ",
							meta?.lecture,
							" · ",
							meta?.title
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 text-2xl leading-tight text-ink sm:text-3xl",
						"data-testid": "prompt",
						children: current.prompt
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 flex flex-col gap-3",
						role: "group",
						"aria-label": "Answers",
						children: current.choices.map((choice, index) => {
							let state = "choice";
							if (round.picked !== null && index === current.answer) state = "choice choice-good";
							else if (round.picked !== null && index === round.picked) state = "choice choice-bad";
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: state,
								disabled: round.picked !== null,
								onClick: () => pick(index),
								"data-testid": "choice",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-0.5 font-display text-sm font-semibold text-muted",
									children: LETTERS[index]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: choice })]
							}, choice);
						})
					}),
					round.picked !== null ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: right ? "verdict-good mt-5" : "verdict-bad mt-5",
						role: "status",
						"data-testid": "verdict",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: right ? "stamp text-good" : "stamp text-accent",
								children: [right ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
									className: "size-5",
									"aria-hidden": "true"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
									className: "size-5",
									"aria-hidden": "true"
								}), right ? "Correct" : "Incorrect"]
							}),
							!right ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 font-semibold text-ink",
								children: ["Answer: ", current.choices[current.answer]]
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-ink",
								children: current.explain
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm text-muted",
						children: "Choose an answer. Keys 1–4 work too."
					})
				]
			}),
			round.picked !== null ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"data-testid": "tag-known",
						"aria-pressed": tag === "known",
						className: tag === "known" ? "min-h-11 rounded-xl bg-good px-4 text-sm font-semibold text-paper" : "min-h-11 rounded-xl border border-line bg-card px-4 text-sm font-semibold text-ink",
						onClick: () => tagCurrent("known"),
						children: "Known"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"data-testid": "tag-work",
						"aria-pressed": tag === "work",
						className: tag === "work" ? "min-h-11 rounded-xl bg-accent px-4 text-sm font-semibold text-paper" : "min-h-11 rounded-xl border border-line bg-card px-4 text-sm font-semibold text-ink",
						onClick: () => tagCurrent("work"),
						children: "Needs work"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"data-testid": "next",
					className: "min-h-11 rounded-xl bg-ink px-5 text-sm font-semibold text-paper",
					onClick: next,
					children: "Next"
				})]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm text-muted",
				children: "Known cards drop out of the next shuffle. Tags stay in this browser."
			})
		]
	});
}
function Home$1({ totals, tags, armedReset, onArm, onCancelArm, onReset, onStart }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto min-h-screen w-full max-w-3xl px-4 py-8 sm:px-6 sm:py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-semibold tracking-widest text-accent uppercase",
				children: "Unit IV · Transportation"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 text-5xl text-ink sm:text-6xl",
				children: "Conduit"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-xl text-lg text-muted",
				children: "Flashcards from the endocrine, blood, heart, vessel, and lymph lectures. Pick an answer and the card tells you if it is correct. Tag what you know. The next shuffle leaves those cards out."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "mt-8 grid grid-cols-3 gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "In the shuffle",
						value: totals.left
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Known",
						value: totals.known
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Needs work",
						value: totals.work
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex flex-col gap-3 sm:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					"data-testid": "shuffle",
					className: "inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3 text-base font-semibold text-paper",
					onClick: () => onStart("all", "unseen"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shuffle, {
							className: "size-4",
							"aria-hidden": "true"
						}),
						"Shuffle ",
						totals.left,
						" cards"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					"data-testid": "needs-work",
					className: "inline-flex min-h-11 flex-1 items-center justify-center rounded-xl border border-line bg-card px-5 py-3 text-base font-semibold text-ink",
					onClick: () => onStart("all", "work"),
					children: [
						"Needs work (",
						totals.work,
						")"
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-12 text-2xl text-ink",
				children: "Lectures"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3 border-t border-line",
				children: DECKS.map((deck) => {
					const cards = CARDS.filter((item) => item.deck === deck.id);
					const known = cards.filter((item) => tags[item.id] === "known").length;
					const work = cards.filter((item) => tags[item.id] === "work").length;
					const left = cards.length - known;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "border-b border-line",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "flex w-full min-h-11 items-center gap-4 py-4 text-left",
							onClick: () => onStart(deck.id, "unseen"),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "w-10 font-display text-2xl text-accent tabular-nums",
									children: deck.lecture
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "min-w-0 flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block text-lg font-semibold text-ink",
										children: deck.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block text-sm text-muted",
										children: deck.line
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-right text-sm text-muted tabular-nums",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "block text-ink",
										children: [left, " left"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "block",
										children: [
											known,
											" known · ",
											work,
											" work"
										]
									})]
								})
							]
						})
					}, deck.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-6 text-sm text-muted",
				children: [totals.total, " cards. Tags stay in this browser."]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4",
				children: armedReset ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-ink",
							children: "Clear every Known and Needs work tag?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "min-h-11 rounded-xl bg-ink px-4 text-sm font-semibold text-paper",
							onClick: onReset,
							children: "Clear tags"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "min-h-11 rounded-xl px-3 text-sm font-semibold text-muted",
							onClick: onCancelArm,
							children: "Cancel"
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: "inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-muted",
					onClick: onArm,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, {
						className: "size-4",
						"aria-hidden": "true"
					}), "Clear all tags"]
				})
			})
		]
	});
}
function Stat({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-line bg-card px-3 py-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "font-display text-3xl text-ink tabular-nums",
			children: value
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "mt-1 text-sm text-muted",
			children: label
		})]
	});
}
function Finished({ round, onHome, onAgain, onMissed, onIncludeKnown, onClearKnown }) {
	const empty = round.queue.length === 0;
	const retryable = round.missed.length > 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto flex min-h-screen w-full max-w-xl flex-col justify-center px-4 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-semibold tracking-widest text-accent uppercase",
				children: deckTitle(round.scope)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 text-4xl text-ink sm:text-5xl",
				children: empty ? "Nothing left to shuffle" : "Shuffle finished"
			}),
			empty ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-lg text-muted",
				children: round.kind === "work" ? "No cards in this set are tagged Needs work." : "Every remaining card is marked Known, so this shuffle skipped them."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 text-lg text-ink",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-4xl tabular-nums",
						children: round.correct
					}),
					" correct",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted",
						children: " · "
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-4xl tabular-nums",
						children: round.wrong
					}),
					" incorrect"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-muted",
				children: "Cards you mark Known stay out of the next shuffle. Needs work cards come back."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex flex-col gap-3",
				children: [
					!empty ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3 font-semibold text-paper",
						onClick: onAgain,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shuffle, {
							className: "size-4",
							"aria-hidden": "true"
						}), "Shuffle again"]
					}) : null,
					retryable ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "min-h-11 rounded-xl border border-line bg-card px-5 py-3 font-semibold text-ink",
						onClick: onMissed,
						children: "Retry the ones you missed"
					}) : null,
					empty && round.kind !== "all" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "min-h-11 rounded-xl bg-accent px-5 py-3 font-semibold text-paper",
						onClick: onIncludeKnown,
						children: "Study them anyway"
					}) : null,
					empty ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "min-h-11 rounded-xl border border-line bg-card px-5 py-3 font-semibold text-ink",
						onClick: onClearKnown,
						children: "Clear Known tags for this set"
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "min-h-11 rounded-xl px-5 py-3 font-semibold text-muted",
						onClick: onHome,
						children: "Back to lectures"
					})
				]
			})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConduitApp, {});
}
//#endregion
export { Home as component };
