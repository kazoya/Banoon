export type Department =
  | "sales"
  | "marketing"
  | "production"
  | "quality"
  | "packing"
  | "schools"
  | "distributors"
  | "management";

export type ProductFamily =
  | "mego"
  | "kido"
  | "playdoh"
  | "champion"
  | "coming";

export type Difficulty = "low" | "medium" | "high";
export type Impact = "low" | "medium" | "high";
export type PilotFit = "strong" | "possible" | "later";
export type AiReadiness = "available_now" | "needs_history" | "needs_iot";

export type CatalogProduct = {
  id: string;
  nameAr: string;
  nameEn: string;
  family: ProductFamily;
  notes: string;
  reuse: string;
  sourceUrl: string;
  contentStatus: "published" | "thin";
};

export type WorkflowNode = {
  id: string;
  title: string;
  currentProcess: string;
  requiredData: string[];
  possibleBottleneck: string;
  automationOpportunity: string;
  aiOpportunity: string;
  kpi: string;
  integration: string;
};

export type Bottleneck = {
  id: string;
  title: string;
  department: Department;
  description: string;
  signalToInvestigate: string;
};

export type OpportunityCard = {
  id: string;
  title: string;
  summary: string;
  impact: Impact;
  requiredData: string[];
  difficulty: Difficulty;
  dependencies: string[];
  pilotFit: PilotFit;
  readiness?: AiReadiness;
};

export type KnowledgeAnswer = {
  id: string;
  question: string;
  answer: string;
  citations: { title: string; note: string }[];
};

export type ReadinessRow = {
  source: string;
  exists: "unknown" | "yes" | "partial" | "no";
  digital: "unknown" | "yes" | "partial" | "no";
  structured: "unknown" | "yes" | "partial" | "no";
  historicalDepth: string;
  api: "unknown" | "yes" | "no";
  aiReadiness: string;
};

export type ContestSchool = {
  id: string;
  name: string;
  type: "روضة" | "مدرسة";
  city: string;
  wrappers: number;
  lastOrderCartons: number;
  coordinator: string;
  status: "نشطة" | "بانتظار الاعتماد" | "جاهزة للجائزة";
};

export type ContestProposal = {
  schoolId: string;
  action: "prize" | "nudge" | "hold";
  prize: string;
  reasons: string[];
  requiresApproval: true;
};

export type SalesScript = {
  id: string;
  audience: string;
  title: string;
  opener: string;
  proof: string;
  ask: string;
};
