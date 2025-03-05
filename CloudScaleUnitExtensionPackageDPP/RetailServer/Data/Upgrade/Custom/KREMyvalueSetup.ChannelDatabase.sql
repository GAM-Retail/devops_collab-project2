/**
 * SAMPLE CODE NOTICE
 * 
 * THIS SAMPLE CODE IS MADE AVAILABLE AS IS.  MICROSOFT MAKES NO WARRANTIES, WHETHER EXPRESS OR IMPLIED,
 * OF FITNESS FOR A PARTICULAR PURPOSE, OF ACCURACY OR COMPLETENESS OF RESPONSES, OF RESULTS, OR CONDITIONS OF MERCHANTABILITY.
 * THE ENTIRE RISK OF THE USE OR THE RESULTS FROM THE USE OF THIS SAMPLE CODE REMAINS WITH THE USER.
 * NO TECHNICAL SUPPORT IS PROVIDED.  YOU MAY NOT DISTRIBUTE THIS CODE UNLESS YOU HAVE A LICENSE AGREEMENT WITH MICROSOFT THAT ALLOWS YOU TO DO SO.
 */

IF (SELECT OBJECT_ID('[ext].[KREMyValueSetup]')) IS NULL 

BEGIN
    CREATE TABLE
        [ext].[KREMyValueSetup]
    (  
        [RECID] [bigint] NOT NULL,
        [MyValueClientId]     NVARCHAR(100) NOT NULL DEFAULT (('')),
        [MyValueClientSecret]    NVARCHAR(100) DEFAULT ((0)),
        [MyValueURLGetUser] NVARCHAR(100) DEFAULT (('')),
        [MyValueURLGetUserPoint] NVARCHAR(100) DEFAULT (('')),
        [MyValueURLCreateMyValue] NVARCHAR(100) DEFAULT (('')),
        [MyValueURLEarningPoint] NVARCHAR(100) DEFAULT (('')),
        [MyValueURLRedeemPoint] NVARCHAR(100) DEFAULT (('')),
        [MyValueURLReturn] NVARCHAR(100) DEFAULT (('')),
        [MyValueURLRefferal] NVARCHAR(100) DEFAULT ((''))
        CONSTRAINT [I_KREMyValueSetup] PRIMARY KEY CLUSTERED 
        (
            [RECID] ASC
        ) WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
    ) ON [PRIMARY]

    ALTER TABLE [ext].[KREMyValueSetup] WITH CHECK ADD CHECK (([RECID]<>(0)))
END
GO

GRANT SELECT, INSERT, UPDATE, DELETE ON OBJECT::[ext].[KREMyValueSetup] TO [DataSyncUsersRole]
GO


-- Create the custom view that can query a complete Example Entity.

IF (SELECT OBJECT_ID('[ext].[KREMyValueSetupView]')) IS NOT NULL
    DROP VIEW [ext].[KREMyValueSetupView]
GO

CREATE VIEW [ext].[KREMyValueSetupView] AS
(
    SELECT
        et.MyValueClientId,
        et.MyValueClientSecret,
        et.MyValueURLCreateMyValue,
        et.MyValueURLEarningPoint,
        et.MyValueURLGetUser,
        et.MyValueURLGetUserPoint,
        et.MyValueURLRedeemPoint,
        et.MyValueURLReturn,
        et.MyValueURLRefferal,
        et.AutoCreateCust
    FROM
        [ext].[KREMyValueSetup] et
)
GO

GRANT SELECT ON OBJECT::[ext].[KREMyValueSetupView] TO [UsersRole];
GO

GRANT SELECT ON OBJECT::[ext].[KREMyValueSetupView] TO [DeployExtensibilityRole];
GO