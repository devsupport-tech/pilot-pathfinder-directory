
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AlertTriangle, ShieldCheck, Lightbulb, Activity, Car, Wrench, User, CheckCircle, Headphones } from "lucide-react";

const SafetyGuidelines = () => {
  return (
    <div className="space-y-8">
      <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-6">
        <div className="flex items-start gap-4">
          <div className="bg-amber-100 dark:bg-amber-900 p-3 rounded-full">
            <AlertTriangle size={24} className="text-amber-600 dark:text-amber-400" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-amber-800 dark:text-amber-300 mb-2">Safety First</h2>
            <p className="text-amber-700 dark:text-amber-400">
              Following proper safety guidelines is critical for all pilot car operators. These guidelines 
              help protect you, the transported load, and other road users.
            </p>
          </div>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ShieldCheck size={20} className="text-accent-500" />
            <span>Comprehensive Safety Guidelines</span>
          </CardTitle>
          <CardDescription>
            Essential safety protocols for all pilot car operators
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="flex items-center gap-2">
                <Car size={18} className="text-pilot-500" />
                <span>Vehicle Requirements</span>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-10 space-y-2 text-pilot-600 dark:text-pilot-400">
                  <li>Vehicle must be properly registered and insured for business use</li>
                  <li>Vehicle should be in excellent working condition with regular maintenance</li>
                  <li>Maintain appropriate height pole when escorting loads exceeding legal height</li>
                  <li>Display "OVERSIZE LOAD" signs when actively escorting</li>
                  <li>Minimum of two amber/yellow warning lights visible from all directions</li>
                  <li>Spare parts kit including fuses, light bulbs, and basic repair tools</li>
                  <li>First aid kit, fire extinguisher, and emergency reflectors/flares</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="flex items-center gap-2">
                <Wrench size={18} className="text-pilot-500" />
                <span>Equipment & Supplies</span>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-10 space-y-2 text-pilot-600 dark:text-pilot-400">
                  <li>Reliable two-way communication system (CB radio and mobile phone)</li>
                  <li>High-visibility safety vest, hard hat, and safety glasses</li>
                  <li>STOP/SLOW paddle (18" minimum) for traffic control when authorized</li>
                  <li>Approved warning flags (red or orange) and extra "OVERSIZE LOAD" signs</li>
                  <li>Measuring tape or range finder to verify clearances</li>
                  <li>Digital camera to document route hazards or incidents</li>
                  <li>Weather-appropriate clothing and protective gear</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="flex items-center gap-2">
                <User size={18} className="text-pilot-500" />
                <span>Operator Requirements</span>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-10 space-y-2 text-pilot-600 dark:text-pilot-400">
                  <li>Valid driver's license with appropriate endorsements</li>
                  <li>Pilot/Escort Vehicle Operator certification as required by state laws</li>
                  <li>Knowledge of state-specific regulations and requirements</li>
                  <li>Proper training in traffic control procedures when authorized</li>
                  <li>Physical ability to perform all required duties</li>
                  <li>Clean driving record with no major traffic violations</li>
                  <li>Regular rest periods to avoid fatigue (follow hours-of-service guidelines)</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="flex items-center gap-2">
                <Activity size={18} className="text-pilot-500" />
                <span>Operational Procedures</span>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-10 space-y-2 text-pilot-600 dark:text-pilot-400">
                  <li>Conduct pre-trip planning and route surveys when necessary</li>
                  <li>Maintain proper positioning (lead or follow) based on load type and regulations</li>
                  <li>Monitor clearances continuously for overheight, overwidth loads</li>
                  <li>Provide clear communication to transport driver about hazards and clearances</li>
                  <li>Follow all traffic laws and regulations at all times</li>
                  <li>Document any incidents, near-misses, or regulatory concerns</li>
                  <li>Coordinate with other escort vehicles for complex movements</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="flex items-center gap-2">
                <Headphones size={18} className="text-pilot-500" />
                <span>Communication Protocols</span>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-10 space-y-2 text-pilot-600 dark:text-pilot-400">
                  <li>Establish clear communication signals before beginning transport</li>
                  <li>Maintain regular communication with transport driver</li>
                  <li>Use standard terminology to avoid misunderstandings</li>
                  <li>Alert transport driver immediately of any hazards or concerns</li>
                  <li>Coordinate with law enforcement escorts when applicable</li>
                  <li>Keep communications professional and focused on the transport</li>
                  <li>Have backup communication methods in case of primary system failure</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="flex items-center gap-2">
                <Lightbulb size={18} className="text-pilot-500" />
                <span>Best Practices</span>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-10 space-y-2 text-pilot-600 dark:text-pilot-400">
                  <li>Always conduct a pre-trip safety briefing with all involved personnel</li>
                  <li>Stay alert and focused on the task at all times</li>
                  <li>Anticipate potential hazards and act proactively</li>
                  <li>Maintain professional appearance and demeanor as you represent the industry</li>
                  <li>Stay updated on changing regulations and requirements</li>
                  <li>Document your work with appropriate logs and records</li>
                  <li>Pursue ongoing training and certification to enhance skills</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger className="flex items-center gap-2">
                <CheckCircle size={18} className="text-pilot-500" />
                <span>Certification & Compliance</span>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-10 space-y-2 text-pilot-600 dark:text-pilot-400">
                  <li>Keep all certifications current and carried in the vehicle</li>
                  <li>Maintain business licenses and permits as required</li>
                  <li>Carry proper insurance documentation at all times</li>
                  <li>Follow state-specific equipment and operational requirements</li>
                  <li>Complete and retain required documentation for each escort job</li>
                  <li>Track hours of service in compliance with applicable regulations</li>
                  <li>Report any incidents as required by law or company policy</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
};

export default SafetyGuidelines;
