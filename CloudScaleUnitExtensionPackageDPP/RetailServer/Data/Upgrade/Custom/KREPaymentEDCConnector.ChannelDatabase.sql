/**
 * SAMPLE CODE NOTICE
 * 
 * THIS SAMPLE CODE IS MADE AVAILABLE AS IS.  MICROSOFT MAKES NO WARRANTIES, WHETHER EXPRESS OR IMPLIED,
 * OF FITNESS FOR A PARTICULAR PURPOSE, OF ACCURACY OR COMPLETENESS OF RESPONSES, OF RESULTS, OR CONDITIONS OF MERCHANTABILITY.
 * THE ENTIRE RISK OF THE USE OR THE RESULTS FROM THE USE OF THIS SAMPLE CODE REMAINS WITH THE USER.
 * NO TECHNICAL SUPPORT IS PROVIDED.  YOU MAY NOT DISTRIBUTE THIS CODE UNLESS YOU HAVE A LICENSE AGREEMENT WITH MICROSOFT THAT ALLOWS YOU TO DO SO.
 */

IF (SELECT OBJECT_ID('[ext].[KREConnectorRegisterPaymentEDC]')) IS NULL 
BEGIN
    CREATE TABLE
        [ext].[KREConnectorRegisterPaymentEDC]
    (  
        [RECID] bigint NOT NULL,
        [ConnectorId]     NVARCHAR(100) NOT NULL DEFAULT (('')),
        [Name]    NVARCHAR(100) DEFAULT ((0)),
        [BaudRate] NVARCHAR(100) DEFAULT (('')),
        [Com] NVARCHAR(100) DEFAULT (('')),
        [TerminalId] NVARCHAR(100) DEFAULT ((''))
        CONSTRAINT [I_KREConnectorRegisterPaymentEDC] PRIMARY KEY CLUSTERED 
        (
            [RECID] ASC
        ) WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
    ) ON [PRIMARY]

    ALTER TABLE [ext].[KREConnectorRegisterPaymentEDC] WITH CHECK ADD CHECK (([RECID]<>(0)))
END
GO

GRANT SELECT, INSERT, UPDATE, DELETE ON OBJECT::[ext].[KREConnectorRegisterPaymentEDC] TO [DataSyncUsersRole]
GO

-- Create the custom view that can query a complete Example Entity.

IF (SELECT OBJECT_ID('[ext].[KREConnectorRegisterPaymentEDCView]')) IS NOT NULL
    DROP VIEW [ext].[KREConnectorRegisterPaymentEDCView]
GO

CREATE VIEW [ext].[KREConnectorRegisterPaymentEDCView] AS
(
    SELECT
        et.ConnectorId,
        et.Name,
        et.BaudRate,
        et.Com,
        et.TerminalId
    FROM
        [ext].[KREConnectorRegisterPaymentEDC] et
)
GO

GRANT SELECT ON OBJECT::[ext].[KREConnectorRegisterPaymentEDCView] TO [UsersRole];
GO

GRANT SELECT ON OBJECT::[ext].[KREConnectorRegisterPaymentEDCView] TO [DeployExtensibilityRole];
GO

--storeprocedure

-- get data transactionTable
IF OBJECT_ID(N'[ext].[[KREGetConnectorRegisterPaymentEDC]]', N'P') IS NOT NULL
    DROP PROCEDURE [ext].[KREGetConnectorRegisterPaymentEDC]
GO

CREATE PROCEDURE [ext].[KREGetConnectorRegisterPaymentEDC]
    @Name  NVARCHAR(100),
    @TerminalId NVARCHAR (100)
AS
BEGIN
    SET NOCOUNT ON

	SELECT
        trs.ConnectorId,
        trs.Name,
        trs.BaudRate,
        trs.Com,
        trs.TerminalId
    FROM [ext].[KREConnectorRegisterPaymentEDC] trs
	WHERE trs.Name = @Name and trs.TerminalId = @TerminalId
end 
go

GRANT EXECUTE ON [ext].[KREGetConnectorRegisterPaymentEDC] TO [UsersRole];
GO

GRANT EXECUTE ON [ext].[KREGetConnectorRegisterPaymentEDC] TO [DeployExtensibilityRole];
GO