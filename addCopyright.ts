import fs from "fs";
import path from "path";
import { input } from "@inquirer/prompts";
import { simpleGit } from "simple-git";

interface DeveloperDetails {
  developerName: string;
  purpose: string;
}

async function promptDeveloperDetails(): Promise<DeveloperDetails> {
  const developerName = await input({ message: "Enter the developer's name:" });
  const purpose = await input({
    message: "Enter the high-level purpose of the file:",
  });

  return {
    developerName,
    purpose,
  };
}

function generateCopyrightText(
  fileName: string,
  developerName: string,
  purpose: string,
  isNewFile: boolean
): string {
  const today = new Date().toISOString().split("T")[0];
  if (isNewFile) {
    return `
/*

**  File Name:        ${fileName}

**

**  Description:      ${purpose}

**

**    Author:               ${developerName}

**  Creation Date:  ${today}

**

******************************************************************************

**                                                                            **

**                          COPYRIGHT                                         **

**                                                                            **

** (C) Copyright 2024                                                         **

** Cygnus Compliance Consulting, Inc.                                        **

**                                                                            **

** This software is furnished under a license for use only on a single       **

** computer system and may be copied only with the inclusion of the  above    **

** copyright notice. This software or any other copies thereof, may not be **

** provided or otherwise made available to any other person  except for use     **

** on such system and to one who agrees to these license terms. title and   **

** ownership of the software shall at all times remain in                   **

** Cygnus Compliance Consulting, Inc.                                       **

**                                                                            **

** The information in this software is subject to change without notice and **

** should not be construed as a commitment by                                **

** Cygnus Compliance Consulting, Inc.                                       **

******************************************************************************

                                                     

******************************************************************************

                              Maintenance History                         

-------------|----------|----------------------------------------------------

    Date     |  Person  |  Description of Modification                   

-------------|----------|----------------------------------------------------

*/
`;
  } else {
    return `
-------------|----------|----------------------------------------------------
    ${today}  |  ${developerName}  |  ${purpose}                    
-------------|----------|----------------------------------------------------
`;
  }
}

function addCopyrightToFile(
  filePath: string,
  developerName: string,
  purpose: string
): void {
  const fileName = path.basename(filePath);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const isNewFile = !fileContent.includes(
    "** Cygnus Compliance Consulting, Inc."
  );
  const copyrightText = generateCopyrightText(
    fileName,
    developerName,
    purpose,
    isNewFile
  );

  let updatedContent: string;

  if (isNewFile) {
    updatedContent = `${copyrightText}\n${fileContent}`;
  } else {
    const maintenanceHistoryIndex = fileContent.lastIndexOf(
      "Maintenance History"
    );
    const historySectionIndex = fileContent.indexOf(
      "-------------",
      maintenanceHistoryIndex
    );

    updatedContent =
      fileContent.slice(0, historySectionIndex) +
      copyrightText +
      fileContent.slice(historySectionIndex);
  }

  fs.writeFileSync(filePath, updatedContent, "utf8");
  console.log(`Updated ${fileName}`);
}

async function main() {
  const git = simpleGit();
  const { developerName, purpose } = await promptDeveloperDetails();

  const status = await git.status();
  const stagedFiles = status.staged.filter((file) =>
    /\.(ts|tsx|jsx|js|css)$/.test(file)
  );

  stagedFiles.forEach((file) => {
    const fullPath = path.resolve(file);
    addCopyrightToFile(fullPath, developerName, purpose);
  });
}

main();
